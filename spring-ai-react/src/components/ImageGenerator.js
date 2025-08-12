import React, {useState} from "react";

function ImageGenerator() {

    const [promt, setPromt] = useState('') ;
    const [imageUrls, setImageUrls] = useState([]) ;

    const generateImage = async () => {
        // Simulate image generation
        try{
            const response = await fetch(`http://localhost:8080/generate-image?promt=${promt}`);
            const urls = await response.json();
            if (Array.isArray(urls)) {
                setImageUrls(urls);
            } else {
                setImageUrls([]);
                console.error("Backend did not return an array:", urls);
            }
        }
        catch (error) {
            setImageUrls([]);
            console.error("Error generating image:", error);
        }
    }

  return (
    <div className="tab-content">
      <h2>Image Generator</h2>
      <input
        type="text"
        value={promt}
        onChange={(e) => setPromt(e.target.value)}
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
