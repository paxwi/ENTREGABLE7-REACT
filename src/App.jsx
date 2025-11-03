import { useState } from "react";
import "./App.css";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");
  const [presionando, setPresionando] = useState(false);

  const multiplicar = () => {
    console.log("Multiplicando..."); 
    if (numero1 === "" || numero2 === "") {
      setResultado("Por favor complete todos los campos");
    } else {
      let total = numero1 * numero2;
      setResultado("El resultado es: " + total);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
        fontFamily: "arial",
        backgroundColor: "#fafafa",
      }}
    >
      <h1 style={{ color: "black", textAlign: "center" }}>
        Ingresar dos numeros para multiplicar
      </h1>

      <div style={{ marginBottom: "12px", width: "250px" }}>
        <label style={{ color: "black" }}>Numero 1:</label>
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "6px",
            borderRadius: "6px",
            border: "1px solid gray",
            color: "black",
            backgroundColor: "white",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px", width: "250px" }}>
        <label style={{ color: "black" }}>Numero 2:</label>
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "6px",
            borderRadius: "6px",
            border: "1px solid gray",
            color: "black",
            backgroundColor: "white",
          }}
        />
      </div>

      <button
        onMouseDown={() => setPresionando(true)}
        onMouseUp={() => setPresionando(false)}
        onClick={multiplicar}
        style={{
          backgroundColor: presionando ? "#0b630b" : "#1ca81c",
          color: "white",
          padding: "10px 20px",
          border: "0px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Multiplicar
      </button>

      {resultado && (
        <p style={{ marginTop: "15px", color: "black" }}>{resultado}</p>
      )}
    </div>
  );
}

export default App;
