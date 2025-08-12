package com.ai.SpringAiLearning.Service;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final ChatModel chatModel;
    public ChatService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String getResponse(String promt){
        return chatModel.call(promt) ;
    }

    public String getResponseOptions(String promt) {
        ChatResponse response = chatModel.call(
                new Prompt(
                        promt,
                        OpenAiChatOptions.builder()
                                .temperature(0.7)
                                .maxTokens(1000)
                                .model("gpt-3.5-turbo")
                                .build()
                )
        );

        return response.getResult().getOutput().getText() ;
    }
}
