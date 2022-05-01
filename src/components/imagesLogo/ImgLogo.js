import "./ImgLogo.style.css";

export const ImgLogo = (props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img className={props.classes} src={props.imagem} />;
};
