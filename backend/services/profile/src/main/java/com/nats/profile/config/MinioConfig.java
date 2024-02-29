// package com.seasonalworkers.profile.config;

// import io.minio.BucketExistsArgs;
// import io.minio.MakeBucketArgs;
// import io.minio.MinioClient;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.beans.factory.annotation.Value;

// @Configuration
// public class MinioConfig {

// public static final String BUCKET_NAME = "seasonal-workers";

// @Value("${minio.url}")
// private String minioEndpoint;

// @Value("${minio.accessKey}")
// private String minioAccessKey;

// @Value("${minio.secretKey}")
// private String minioSecretKey;

// @Bean
// MinioClient minioClient() throws Exception {
// MinioClient minioClient = MinioClient.builder()
// .endpoint(minioEndpoint)
// .credentials(minioAccessKey, minioSecretKey)
// .build();

// if
// (!minioClient.bucketExists(BucketExistsArgs.builder().bucket(BUCKET_NAME).build()))
// {
// minioClient.makeBucket(MakeBucketArgs.builder().bucket(BUCKET_NAME).build());
// }

// return minioClient;
// }
// }
