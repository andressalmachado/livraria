import { Titulo } from "../Titulo";

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <div>
      <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">
        {titulo}
      </Titulo>
      <h4>{subtitulo}</h4>
      <p>{descricao}</p>
      <img src={img} alt={titulo} />
      <button>Saiba mais</button>
    </div>
  );
}

export default CardRecomenda;
