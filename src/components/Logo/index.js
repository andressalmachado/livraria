import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;
const ImagemLogo = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      <ImagemLogo src={logo} alt="Logo do site" />
      <p>Livraria</p>
    </LogoContainer>
  );
}
export default Logo;
