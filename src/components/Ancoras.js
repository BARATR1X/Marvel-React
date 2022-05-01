import "./Ancoras.style.css";

export const Ancoras = (props) => {
  return (
    <a href={props.href} className="ancoras">
      {props.ancora}
    </a>
  );
};
