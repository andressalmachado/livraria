import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../imagens/livro.png";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin: 30px 0;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;

  img {
    margin-left: 20px;
  }
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhoFonte="36px">
        Últimos lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt={livro.nome} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Liderança em design"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
