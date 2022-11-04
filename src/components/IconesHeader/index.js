import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const IconesHeaderContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  padding: 0 15px;
  width: 25px;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <IconesHeaderContainer>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt={icone} />
        </Icone>
      ))}
    </IconesHeaderContainer>
  );
}
export default IconesHeader;
