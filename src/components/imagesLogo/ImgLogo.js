import "./ImgLogo.style.css";

export const ImgLogo = (props) => {
  return <img className={props.classes} src={props.imagem} />;
};
