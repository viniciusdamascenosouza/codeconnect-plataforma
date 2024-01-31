import "./styles.css";
import Capa from "./assets/capa.png";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import Icone from "./assets/icone.png";

export default function Card() {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={Capa} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>Titulo do post</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="ícone códigos" />
            </li>
            <li>
              <img src={Chat} alt="ícone comentário" />
            </li>
            <li>
              <img src={Share} alt="ícone compartilhar" />
            </li>
          </ul>

          <div className="rodape__usuario">
            <img src={Icone} alt="Imagem do usuário" />
            @vds
          </div>
        </div>
      </div>
    </article>
  );
}
