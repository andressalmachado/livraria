import styled from "styled-components";

const OpcoesHeaderContainer = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  min-width: 120px;
`;

function OpcoesHeader() {
  const textoOpcoes = ["Categorias", "Favoritos", "Minha estante"];
  return (
    <OpcoesHeaderContainer>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </OpcoesHeaderContainer>
  );
}

export default OpcoesHeader;
