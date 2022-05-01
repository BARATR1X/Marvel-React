import { Stack } from "@mui/material/";
import { ImgLogo } from "../components/imagesLogo/ImgLogo";
import "./Headers.style.css";
import ImageLogo2 from "./img/dr-strange-logo.png";
import ImageLogo from "./img/logo-marvel-256.png";
import ImageLogo3 from "./img/moon-knight-logo.png";
import ImageLogo1 from "./img/spider-man-logo.png";

export const Headers = () => {
  return (
    <div className="header">
      <ImgLogo className="img1" imagem={ImageLogo} />
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={1}
      >
        <ImgLogo className="img1" imagem={ImageLogo1} />
        <ImgLogo className="img1" imagem={ImageLogo2} />
        <ImgLogo className="img1" imagem={ImageLogo3} />
      </Stack>
    </div>
  );
};
