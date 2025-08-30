// import React, { useState  } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import React, { useState } from "react";
import "./App.css";

const PuzzlePiece = ({ img, x, y, width, height }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${img})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundSize: "300px 300px", // כדי שכל החלקים יהיו חלק מתמונה שלמה
    display: "inline-block",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  };

  return <div style={style}></div>;
};

function App() {
  const [image, setImage] = useState(null);
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const pieces = 4; // סה"כ חלקים
  const rowsCols = Math.sqrt(pieces); // שורש ריבועי (3x3 במקרה הזה)
  const pieceSize = 300 / rowsCols; // גודל כל חתיכה (רוחב וגם גובה)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const generatePuzzle = () => {
    const newPieces = [];

    for (let row = 0; row < rowsCols; row++) {
      for (let col = 0; col < rowsCols; col++) {
        newPieces.push({
          x: col * pieceSize,
          y: row * pieceSize,
        });
      }
    }

    setPuzzlePieces(newPieces);
  };

  return (
    <div className="App">
      <h1>Puzzle Game</h1>
      <input type="file" onChange={handleImageChange} />

      {image && (
        <div>
          <button onClick={generatePuzzle}>Generate Puzzle</button>

          <div>
            {puzzlePieces.map((piece, index) => (
              <PuzzlePiece
                key={index}
                img={image}
                x={piece.x}
                y={piece.y}
                width={pieceSize}
                height={pieceSize}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
