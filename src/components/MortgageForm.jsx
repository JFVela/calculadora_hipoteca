// src/components/MortgageForm.jsx
import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Operacion, Titulo, Label, Ordenador } from "../styles";
import TypeSelector from "./TypeSelector";

export default function MortgageForm({
  importe,
  plazo,
  tasa,
  tipo,
  onImporteChange,
  onPlazoChange,
  onTasaChange,
  onTipoChange,
  onSubmit,
  onReset,
}) {
  return (
    <Operacion>
      <Titulo>Calculadora de hipotecas</Titulo>

      <Button variant="text" onClick={onReset} sx={{ mb: 2 }}>
        Borrar todo
      </Button>

      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <Label>Importe de la hipoteca</Label>
          <OutlinedInput
            required
            fullWidth
            type="number"
            value={importe}
            onChange={onImporteChange}
            startAdornment={
              <InputAdornment position="start">S/ </InputAdornment>
            }
          />
        </Box>

        <Ordenador sx={{ mb: 2 }}>
          <TextField
            required
            label="Plazo de hipoteca"
            type="number"
            value={plazo}
            onChange={onPlazoChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">años</InputAdornment>
              ),
            }}
          />

          <TextField
            required
            label="Tasa de interés"
            type="number"
            value={tasa}
            onChange={onTasaChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Ordenador>
        <br />
        <TypeSelector tipo={tipo} onChange={onTipoChange} />

        <Button
          startIcon={<CalculateIcon />}
          fullWidth
          variant="contained"
          type="submit"
        >
          Calcular pagos
        </Button>
      </form>
    </Operacion>
  );
}
