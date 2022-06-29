import { createApp } from "vue";
import { store, key } from "./store/userStore";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTerminal,
  faSquare,
  faMagnifyingGlass,
  faIndustry,
  faNetworkWired,
  faChessKnight,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "@/router/index";
import "./index.scss";

library.add(faTerminal);
library.add(faSquare);

library.add(faMagnifyingGlass);

library.add(faIndustry);
library.add(faNetworkWired);
library.add(faChessKnight);
library.add(faServer);

library.add(faHtml5);
library.add(faCss3);
library.add(faJs);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store, key);

app.mount("#app");
