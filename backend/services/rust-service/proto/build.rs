use std::io::Result;

fn main() -> Result<()> {
    // prost_build::compile_protos(&["src/models/message.proto"], &["src/"])?;
    // prost_build::compile_protos(&["src/services/messaging.proto"], &["src/"])?;
    prost_build::compile_protos(&["src/proto/models/ad.proto"], &["src/"])?;
    
    Ok(())
}