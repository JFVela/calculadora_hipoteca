// src/styles.js
import styled from "styled-components";

export const Caja = styled.div`
  border-radius: 16px;
  background-color: var(--color-surface);
  height: 100%;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Operacion = styled.div`
  background-color: var(--color-surface);
  margin: 32px;
`;

export const Banner = styled.div`
  background-color: var(--color-primary);
  color: var(--color-surface);
  padding: 16px;
  text-align: left;
  border-radius: 0 16px 16px 64px;
  display: flex;
  align-items: center;
  width: 50%;
  @media (max-width: 600px) {
    width: auto;
    border-radius: 15px;
}
`;

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Subtitulo = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Descripcion = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  display: block;
`;

export const Ordenador = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Carta = styled.div`
  border-top: 5px solid var(--color-terciario);
  background-color: var(--color-secondary);
  text-align: center;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Numero = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 8px 0;
  color: var(--color-terciario);
`;

export const MostrarResultados = styled.div``;
