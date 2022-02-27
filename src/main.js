import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import './assets/tailwind.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faDesktopAlt } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);
library.add(faSearch);
library.add(faBook);
library.add(faHeart);
library.add(faPlus);
library.add(faChevronDown);
library.add(faChevronRight);
library.add(faChevronLeft);
library.add(faCaretDown);
library.add(faCaretUp);
library.add(faPlay);
library.add(faPlayCircle);
library.add(faPauseCircle);
library.add(faList);
library.add(faDesktopAlt);
library.add(faVolumeUp);
library.add(faForwardStep);
library.add(faBackwardStep);
library.add(faRepeat);
library.add(faShuffle);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
