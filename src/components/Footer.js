import { ImgLogo } from "../components/imagesLogo/ImgLogo";
import ImageLogo4 from "../components/img/logo-marvel.png";
import ImageLogo5 from "../components/img/marvel-insider.png";
import ImageLogo6 from "../components/img/mu-logo.png";
import "./Footer.style.css";
import { Icones } from "./Icones";
import { ListFooter } from "./ListFooter";
import { PFooter } from "./PFooter";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer2">
          <ImgLogo classes="img1" imagem={ImageLogo4} />
          <div className="ancora">
            <ListFooter ancora="ABOUT MARVEL" />
            <ListFooter ancora="HESP/FAQS" />
            <ListFooter ancora="CAREERS" />
            <ListFooter ancora="INTERNSHIPS" />
          </div>
          <div className="ancora">
            <ListFooter ancora="ADVERTISING" />
            <ListFooter ancora="DISNEY+" />
            <ListFooter ancora="MARVELHQ.COM" />
            <ListFooter ancora="REDEEM DIGITAL COMICS" />
          </div>
        </div>
      </div>
      <div className="footer1">
        <nav className="nav">
          <nav className="footer2">
            <ImgLogo classes="img" imagem={ImageLogo5} />
            <div className="ancora">
              <ListFooter ancora="MARVEL INSIDER" />
              <PFooter ancora="Get Rewarded for Being a Marvel Fan" />
            </div>
          </nav>
          <nav className="footer2">
            <ImgLogo classes="img" imagem={ImageLogo6} />
            <div className="ancora">
              <ListFooter ancora="MARVEL UNLIMITED" />
              <PFooter ancora="Axxess Over 29,000+ Digital Comics" />
            </div>
          </nav>
        </nav>
      </div>
      <div className="footer1">
        <nav className="nav">
          <nav className="footer3">
            <ListFooter ancora="FOLLOW MARVEL" />
            <nav className="icones">
              <Icones />
            </nav>
          </nav>
        </nav>
      </div>
    </div>
  );
};
