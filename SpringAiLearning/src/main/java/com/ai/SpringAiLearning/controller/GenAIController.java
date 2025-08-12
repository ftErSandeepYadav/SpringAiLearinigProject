package com.ai.SpringAiLearning.controller;

import com.ai.SpringAiLearning.Service.ChatService;
import com.ai.SpringAiLearning.Service.ImageService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class GenAIController {

    private ChatService chatService ;
    private ImageService imageService;
    public GenAIController(ChatService chatService, ImageService imageService) {
        this.imageService = imageService ;
        this.chatService = chatService;
    }

    @GetMapping("ask-ai")
    public String getResponse(@RequestParam String promt){
        System.out.println("promt : "+promt);
        return chatService.getResponse(promt) ;
    }

    @GetMapping("ask-ai-options")
    public String getResponseOptions(@RequestParam String promt){
        System.out.println("promt : "+promt);
        return chatService.getResponseOptions(promt) ;
    }

    @GetMapping("generate-image")
    public List<String> generatImages(HttpServletResponse response,
                                      @RequestParam String promt,
                                      @RequestParam(defaultValue="hd") String quality,
                                      @RequestParam(defaultValue="1") int N,
                                      @RequestParam(defaultValue="1024") int height,
                                      @RequestParam(defaultValue="1024") int width

    ) throws IOException {
        ImageResponse imageResponse = imageService.generateImage(promt, quality, N, height, width); ;
        List<String> imageUrls =  imageResponse.getResults().stream()
                .map(result-> result.getOutput().getUrl())
                .collect(Collectors.toList()) ;

        return imageUrls;
    }

}
