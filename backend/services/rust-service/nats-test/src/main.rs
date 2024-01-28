use async_nats::{rustls::Error, service::{endpoint::Endpoint, Config, ServiceExt}};
use futures::StreamExt;
use prost::Message;
use proto::ad;

#[tokio::main]
async fn main() -> Result<(), Error> {
    let nats_url =
        std::env::var("NATS_URL").unwrap_or_else(|_| "nats://localhost:4222".to_string());
    let nc =  async_nats::ConnectOptions::new()
    .require_tls(false)
    .ping_interval(std::time::Duration::from_secs(10))
    .connect(nats_url)
    .await.map_err(|e| {
        Error::General(format!("{:?}", e))
    })?;
    
    let service = nc.add_service(Config {
        name: String::from("ADS"),
        version: String::from("1.0.0"),
        description: None,
        stats_handler: None,
        metadata: None,
        queue_group: None,
    }).await.map_err(|e| {
        Error::General(e.to_string())
    })?;

    let group = service.group("ADS");
    let ep = group.endpoint("post").await.map_err(|e| {
        Error::General(format!("{:?}", e))
    })?;


    let _ = tokio::try_join!(
        enpoint_next(ep)
    );

    Ok(())
}

async fn enpoint_next(mut endpoint: Endpoint) -> Result<(), Error>
    {
        loop {
            if let Some(request) = endpoint.next().await {
                println!("{:?}", request.message.payload);
                let message = ad::Ad::decode(request.message.payload.clone()).map_err(|e| {
                    Error::General(format!("{:?}", e))
                })?;
                println!("{:?}", message);
                let mut response = Vec::new();
                message.encode( &mut response).map_err(|e| {
                    Error::General(format!("{:?}", e))
                })?;
                request.respond(Ok(response.into())).await.map_err(|e| {
                    Error::General(format!("{:?}", e))
                })?;
            }
        }
    }
