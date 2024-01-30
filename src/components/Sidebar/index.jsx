import Logo from "./assets/logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import Info from "./assets/info.svg";
import Logout from "./assets/logout.svg";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do codeconnect" />

      <nav>
        <ul>
          <li>
            <a href="#">Publicar</a>
          </li>
          <li>
            <a href="#">
              <img src={Feed} alt="ícone de revista indicando feed" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Perfil} alt="ícone de perfil" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a>
              <img src={Info} alt="ícone de informações" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Logout} />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
