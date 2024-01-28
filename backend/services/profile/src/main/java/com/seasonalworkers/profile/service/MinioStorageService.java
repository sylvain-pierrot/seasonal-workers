package com.seasonalworkers.profile.service;

import io.minio.GetObjectArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.seasonalworkers.profile.config.MinioConfig;
import java.io.InputStream;

@Service
@RequiredArgsConstructor
public class MinioStorageService {

    private final MinioClient minioClient;

    @Value("${minio.put-object-part-size}")
    private Long putObjectPartSize;

    public void save(MultipartFile file, String filename) throws Exception {
        minioClient.putObject(
                PutObjectArgs
                        .builder()
                        .bucket(MinioConfig.BUCKET_NAME)
                        .object(filename)
                        .stream(file.getInputStream(), file.getSize(), putObjectPartSize)
                        .build());
    }

    public void proccessFile(MultipartFile file, String filePath) throws Exception {
        if (file != null) {

            try {
                this.save(file, filePath);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public InputStream getInputStream(String path, long offset, long length) throws Exception {
        return minioClient.getObject(
                GetObjectArgs
                        .builder()
                        .bucket(MinioConfig.BUCKET_NAME)
                        .offset(offset)
                        .length(length)
                        .object(path)
                        .build());
    }

    public String buildPathString(String folderName, String subFolder, String filename) {
        return folderName + "/" + subFolder + "/" + filename;
    }

}