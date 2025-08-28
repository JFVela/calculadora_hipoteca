// src/App.jsx
import React, { useState } from "react";
import { ThemeProvider, Container } from "@mui/material";
import customTheme from "./theme";
import MortgageForm from "./components/MortgageForm";
import ResultsDisplay from "./components/ResultsDisplay";
import { Caja } from "./styles";

export default function App() {
  const [importe, setImporte] = useState("");
  const [plazo, setPlazo] = useState("");
  const [tasa, setTasa] = useState("");
  const [tipo, setTipo] = useState("pago");
  const [pagoMensual, setPagoMensual] = useState(null);
  const [pagoTotal, setPagoTotal] = useState(null);

  const calcularHipoteca = () => {
    const P = parseFloat(importe);
    const r = parseFloat(tasa) / 100 / 12;
    const n = parseFloat(plazo) * 12;

    const M = tipo === "pago" ? (P * r) / (1 - Math.pow(1 + r, -n)) : P * r;

    setPagoMensual(M);
    setPagoTotal(M * n);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularHipoteca();
  };

  const handleReset = () => {
    setImporte("");
    setPlazo("");
    setTasa("");
    setTipo("pago");
    setPagoMensual(null);
    setPagoTotal(null);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container fixed>
        <Caja>
          <MortgageForm
            importe={importe}
            plazo={plazo}
            tasa={tasa}
            tipo={tipo}
            onImporteChange={(e) => setImporte(e.target.value)}
            onPlazoChange={(e) => setPlazo(e.target.value)}
            onTasaChange={(e) => setTasa(e.target.value)}
            onTipoChange={(e) => setTipo(e.target.value)}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />

          <ResultsDisplay pagoMensual={pagoMensual} pagoTotal={pagoTotal} />
        </Caja>
      </Container>
    </ThemeProvider>
  );
}
