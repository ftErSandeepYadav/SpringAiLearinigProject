package com.ai.SpringAiLearning.Service;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private final OpenAiImageModel openAiImageModel ;

    public ImageService(OpenAiImageModel openAiImageModel) {
        this.openAiImageModel = openAiImageModel;
    }

    public ImageResponse generateImage(String prompt) {

//        ImageResponse imageResponse = openAiImageModel.call(new ImagePrompt(prompt)) ;

        ImageResponse imageResponse = openAiImageModel.call(
                new ImagePrompt(
                        prompt,
                        OpenAiImageOptions.builder()
                                .quality("hd")
                                .N(3)
                                .height(1024)
                                .width(1024)
                                .build()
                )
        ) ;

        return imageResponse;
    }

    public ImageResponse generateImage(String prompt,
                                       String quality,
                                       int N,
                                       int height,
                                       int width) {

        // You can customize the options based on the parameters received
        OpenAiImageOptions options = OpenAiImageOptions.builder()
                .quality(quality)
                .N(N)
                .height(height)
                .width(width)
                .build();


        ImageResponse imageResponse = openAiImageModel.call(
                new ImagePrompt(
                        prompt,
                        options
                )
        ) ;

        return imageResponse;
    }

}
