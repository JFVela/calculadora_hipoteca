import { Numero, Descripcion } from "../styles";

export default function ResultCard({ label, value, symbol = "S/ " }) {
  return (
    <>
      <Descripcion>{label}</Descripcion>
      <Numero>
        {symbol}
        {value.toFixed(2)}
      </Numero>
    </>
  );
}
