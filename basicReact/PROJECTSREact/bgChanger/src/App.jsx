import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const handleButtonOnClick = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      <div className="d-flex gap-2 justify-content-center py-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleButtonOnClick("blue")}
        >
          Blue
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleButtonOnClick("gray")}
        >
          Gray
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleButtonOnClick("green")}
        >
          Green
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleButtonOnClick("red")}
        >
          Red
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handleButtonOnClick("yellow")}
        >
          Yellow
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => handleButtonOnClick("lightblue")}
        >
          LightBlue
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => handleButtonOnClick("white")}
        >
          White
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => handleButtonOnClick("black")}
        >
          Black
        </button>
        <button
          type="button"
          className="btn"
          style={{ background: "pink", color: "white" }}
          onClick={() => handleButtonOnClick("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
