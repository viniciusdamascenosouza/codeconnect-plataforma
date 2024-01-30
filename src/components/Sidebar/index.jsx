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
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Perfil} alt="ícone de perfil" />
            </a>
          </li>
          <li>
            <a>
              <img src={Info} alt="ícone de informações" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Logout} />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
