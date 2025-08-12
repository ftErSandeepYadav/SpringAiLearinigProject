import React, {useState} from "react";

function ImageGenerator() {

    const [prompt, setPrompt] = useState('') ;
    const [imageUrls, setImageUrls] = useState([]) ;

    const generateImage = async () => {
        // Simulate image generation
        try{
            const response = await fetch(`https://localhost:8080/generate-image?prompt=${prompt}`);
            const urls = await response.json();
            setImageUrls(urls);
        }
        catch (error) {
            console.error("Error generating image:", error);
        }
    }

  return (
    <div className="tab-content">
      <h2>Image Generator</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter image you want to generate"
      />
      <button onClick={generateImage}>Generate Image</button>
      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Generated ${index}`} />
        ))}
        {[...Array(4-imageUrls.length)].map((_, i) => (
          <div key={i+imageUrls.length} className="empty-image-slot" />
        ))}
      </div>
    </div>
  );
}

export default ImageGenerator;
