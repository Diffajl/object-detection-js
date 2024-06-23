// import React, { useRef } from "react";
// import Webcam from "react-webcam";
// import * as tf from "@tensorflow/tfjs";
// import * as cocoModel from "@tensorflow-models/coco-ssd";
// import { useEffect, useState } from "react";
// import './App.css'

// function App() {
//   const [model, setModel] = useState();
//   const [objectName, setObjectName] = useState("");
//   const [objectScore, setObjectScore] = useState("");

//   const videoRef = useRef(null);

//   const loadModel = async () => {
//     try {
//       const loadedModel = await cocoModel.load();
//       setModel(loadedModel);
//     } catch (err) {
//       console.error('Failed to load COCO-SSD model', err);
//     }
//   };

//   useEffect(() => {
//     tf.ready().then(() => {
//       loadModel();
//     });
//   }, []);

//   const predict = async () => {
//     if (!model) return; // Pastikan model sudah dimuat sebelum melakukan prediksi

//     const videoElement = videoRef.current.video; // Dapatkan elemen video dari ref

//     if (videoElement && model) {
//       const predictions = await model.detect(videoElement);

//       if (predictions.length > 0) {
//         const result = predictions[0]; // Ambil prediksi pertama
//         setObjectName(result.class);
//         setObjectScore(result.score);
//       } else {
//         setObjectName("No object detected");
//         setObjectScore("");
//       }
//     }
//   };

//   const videoOptions = {
//     width: 730,
//     height: 400,
//     facingMode: "environment"
//   };

//   return (
//     <div className="App">
//       <button onClick={() => predict()}>Prediksi</button>
//       <h1>Machine Learning Object Detection</h1>
//       <h3>{objectName}</h3>
//       <h3>{objectScore}</h3>
//       <Webcam
//         id="videoSource"
//         audio={false}
//         ref={videoRef}
//         videoConstraints={videoOptions}
//       />
//     </div>
//   );
// }

// export default App;

// import React, { useRef } from "react";
// import Webcam from "react-webcam";
// import * as tf from "@tensorflow/tfjs";
// import * as cocoModel from "@tensorflow-models/coco-ssd";
// import { useEffect, useState } from "react";
// import './App.css'

// function App() {
//   const [model, setModel] = useState();
//   const [objectName, setObjectName] = useState("");
//   const [objectScore, setObjectScore] = useState("");
//   const videoRef = useRef(null);

//   const loadModel = async () => {
//     try {
//       const loadedModel = await cocoModel.load();
//       setModel(loadedModel);
//     } catch (err) {
//       console.error('Failed to load COCO-SSD model', err);
//     }
//   };

//   useEffect(() => {
//     tf.ready().then(() => {
//       loadModel();
//     });
//   }, []);

//   const predict = async () => {
//     if (!model) return;

//     const videoElement = videoRef.current.video;

//     if (videoElement && model) {
//       const predictions = await model.detect(videoElement);

//       if (predictions.length > 0) {
//         const result = predictions[0];
//         setObjectName(result.class);
//         setObjectScore(result.score.toFixed(2));
//       } else {
//         setObjectName("No object detected");
//         setObjectScore("");
//       }
//     }
//   };

//   const videoOptions = {
//     width: 730,
//     height: 400,
//     facingMode: "environment"
//   };

//   return (
//     <div className="App">
//       <h1>Machine Learning Object Detection</h1>
//       <div className="webcam-container">
//         <Webcam
//           id="videoSource"
//           audio={false}
//           ref={videoRef}
//           videoConstraints={videoOptions}
//           mirrored={false}
//         />
//       </div>
//       <button onClick={() => predict()}>Predict</button>
//       <div className="result-container">
//         <div className="result-item">
//           <strong>Object:</strong> {objectName}
//         </div>
//         <div className="result-item">
//           <strong>Score:</strong> {objectScore}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;







import React, { useRef } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as cocoModel from "@tensorflow-models/coco-ssd";
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [model, setModel] = useState();
  const [objectName, setObjectName] = useState("");
  const [objectScore, setObjectScore] = useState("");
  const videoRef = useRef(null);

  const loadModel = async () => {
    try {
      const loadedModel = await cocoModel.load();
      setModel(loadedModel);
    } catch (err) {
      console.error('Failed to load COCO-SSD model', err);
    }
  };

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  const predict = async () => {
    if (!model) return;

    const videoElement = videoRef.current.video;

    if (videoElement && model) {
      const predictions = await model.detect(videoElement);

      if (predictions.length > 0) {
        const result = predictions[0];
        setObjectName(result.class);
        setObjectScore(result.score.toFixed(2));
      } else {
        setObjectName("No object detected");
        setObjectScore("");
      }
    }
  };

  const videoOptions = {
    width: 730,
    height: 400,
    facingMode: "environment"  
    // facingMode: "user"
  };

  return (
    <div className="App">
      <h1>Machine Learning Object Detection</h1>
      <div className="webcam-container">
        <Webcam
          id="videoSource"
          audio={false}
          ref={videoRef}
          videoConstraints={videoOptions}
          mirrored={false} 
        />
      </div>
      <button onClick={() => predict()}>Predict</button>
      <div className="result-container">
        <div className="result-item">
          <strong>Object:</strong> {objectName}
        </div>
        <div className="result-item">
          <strong>Score Probability:</strong> {objectScore}
        </div>
      </div>
    </div>
  );
}

export default App;
