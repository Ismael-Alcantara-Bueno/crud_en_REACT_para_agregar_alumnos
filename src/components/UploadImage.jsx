import React, { useState } from "react";

function UploadImage() {
    const [imageData, setImageData] = useState({});

    function handleImageUpload(event) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
  
      setImageData({
        ...imageData,
        url: imageUrl,
        alt: "Uploaded image",
      });
    }
  
    return (
      <div>
        <input type="file" onChange={handleImageUpload} />
        {imageData.url && (
          <img src={imageData.url} alt={imageData.alt} />
        )}
      </div>
    );
}

export default UploadImage;
