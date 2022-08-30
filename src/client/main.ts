import "./scss/main.scss";
import { handleInfo, handleYear, handleCV, handleHeader } from "./ts/nav";
import { randomiseImages } from "./ts/images";
import { handleModal } from "./ts/modal";
import {slider} from "./ts/slider";
import {documentHeight} from "./ts/mobile";
import 'swiper/css';

window.addEventListener("resize", documentHeight);
window.onload = () => {
  documentHeight()
  handleInfo();
  handleYear();
  handleCV();
  handleHeader();
  randomiseImages();
  handleModal();
  slider();
};
