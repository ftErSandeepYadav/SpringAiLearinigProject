import React, {useState} from "react";

function Chat() {

    const [ prompt, setPrompt] = useState('');
    const[chatResponses, setChatResponses] = useState([]);

    const askAi = async () => {
        try{
            const response = await fetch(`https://localhost:8080/ask-ai?prompt=${prompt}`);
            const data = await response.text();
            setChatResponses(data);
            setPrompt('');
        }
        catch(error) {
            console.error("Error asking AI:", error);
        }
    }

  return (
    <div>
      <h2>Chat</h2>
        <input type="text" placeholder="Type your message here..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={askAi}>Ask AI</button>
        <div className="output">
          <pre className="recipe-text">{chatResponses}</pre>
        </div>
    </div>
  );
}

export default Chat;
