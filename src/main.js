import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRight,
  faBoxesStacked,
  faBuilding,
  faCheckCircle,
  faDraftingCompass,
  faEnvelope,
  faHardHat,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowRight,
  faCheckCircle,
  faDraftingCompass,
  faLocationDot,
  faHardHat,
  faBoxesStacked,
  faBuilding,
  faPhone,
  faEnvelope,
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
