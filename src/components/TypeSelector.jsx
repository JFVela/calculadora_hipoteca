// src/components/TypeSelector.jsx
import React from "react";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Label } from "../styles";

export default function TypeSelector({ tipo, onChange }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Label>Tipo de hipoteca</Label>
      <RadioGroup
        value={tipo}
        onChange={onChange}
        sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <FormControlLabel value="pago" control={<Radio />} label="Pago" />
        <FormControlLabel
          value="solointeres"
          control={<Radio />}
          label="Solo intereses"
        />
      </RadioGroup>
    </Box>
  );
}
