import React, { useRef, useState } from "react";
import Navbar from "./Navbar"
import WebcamCapture from "./WebCam";
import Pred from "./Pred.jsx";
const Recommendation = () => {
  const [captureToggle, setToggle] = useState(false)
  const [canvasToggle, setCanvas] = useState(false)
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setimageData] = useState("");
  const  handleImageData = (data) =>{
    console.log(data)
    setimageData(data);
  
  };

  const startCamera = async () => {
    setToggle(true);
    setCanvas(false)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    setCanvas(true)
    console.log(canvasToggle)
    const canvas = canvasRef.current;
    const video = videoRef.current;
  
    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
      // Convert canvas to image data
      const imageData = canvas.toDataURL('image/png');
  
      // Display the captured image in the canvas
      const capturedImage = new Image();
      capturedImage.src = imageData;
      capturedImage.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(capturedImage, 0, 0, canvas.width, canvas.height);
      };
      capturedImage.src = imageData;
  
      // Stop the video stream
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    
    setToggle(false)
    };


  

  return (
    <>
      <div className="main-container flex flex-col bg-main-back w-[100%]  min-h-screen p-8  font-ubuntu">
        {/* Navbar Start */}
        {/* <Navbar/> */}
        {/* Navbar Ended */}

        <div className="recommendation text-white font-ubuntu mt-6 bg-sidebar-back p-6">
          <h1 className="header text-left  rounded p-2 text-4xl font-bold">
            Recommendation
          </h1>

          {/* <div className="text-area text-black font-raleway">
            <h2 className="text-3xl text-white font-bold mb-2">Select Emotion</h2>
            <select name="selected_emotion" className="text-3xl">
              <option value="happy">Happy</option>
              <option value="angry">Angry</option>
              <option value="fear">Fear</option>
              <option value="neutral">Neutral</option>
              <option value="sad">Sad</option>
              <option value="surprise">Surprise</option>
              <option value="disgust">Disgust</option>
            </select>
            <h2 className="text-3xl text-white font-bold mt-2">OR</h2>
          </div>
          <div>
            <button onClick={startCamera} className="border-white border-2 p-2 rounded m-2">Start Camera</button>
            
            <div className="flex justify-center items-center">
            { captureToggle && <video
              ref={videoRef}
              width="500"
              height="400"
              autoPlay
              style={{ transform: "scaleX(-1)" }}
            ></video>}
            </div>
            { captureToggle && <button onClick={captureImage} className="border-white border-2 p-2 rounded m-2">Capture Image</button> }
            <div className="canvas-container flex justify-center items-center">
            {  <canvas ref={canvasRef} width={500} height={400}></canvas>}
            </div>
            
          </div>

          <div className="recommend-button">
            <button className="recommend border-green-600 border-2 p-2 rounded m-2 text-green-600 font-raleway hover:scale-105 shadow-sm hover:shadow-green-400">Recommend</button>
          </div> */}

      <WebcamCapture  onTakePhoto={handleImageData}/>
      {/* <SpotifyEmbed trackURI={trackURI}/> */}
      {imageData.length >0  && <Pred imageData={imageData} />}
      {/* {console.log(imageData)} */}
      {/* <Pred/> */}
        </div>
      </div>
    </>
  );
};

export default Recommendation;
