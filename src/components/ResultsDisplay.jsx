import Calculadora from "../../public/calculadora.png";
import {Carta, Banner, Subtitulo, Descripcion, MostrarResultados } from "../styles";
import ResultCard from "./ResultCard.jsx";

export default function ResultsDisplay({ pagoMensual, pagoTotal }) {
  const hayResultado = pagoMensual != null;

  return (
    <Banner>
      <MostrarResultados>
        {hayResultado ? (
          <>
            <Subtitulo>Sus resultados</Subtitulo>
            <Descripcion>
              Sus resultados se muestran a continuación según la información que
              proporcionó. Para ajustar los resultados, edite el formulario y
              haga clic en "Calcular pagos" nuevamente.
            </Descripcion>

            <Carta>
              <ResultCard label="Sus pagos mensuales" value={pagoMensual} />
              <hr />
              <ResultCard
                label="Total que pagará durante el plazo"
                value={pagoTotal}
              />
            </Carta>
          </>
        ) : (
          <>
            <img src={Calculadora} alt="Calculadora" width="40%" />
            <Subtitulo>Los resultados se mostrarán aquí</Subtitulo>
            <Descripcion>
              Completa el formulario y haz clic en "Calcular pagos" para ver tus
              pagos mensuales.
            </Descripcion>
          </>
        )}
      </MostrarResultados>
    </Banner>
  );
}
