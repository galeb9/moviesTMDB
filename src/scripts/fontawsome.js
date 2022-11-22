import { library } from "@fortawesome/fontawesome-svg-core";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
// import {} from "@fortawesome/free-brands-svg-icons";

const icons = [faChevronRight, faImage];

for (let i = 0; i < icons.length; i++) {
  library.add(icons[i]);
}
