//
// PATH OF THIS FILE: ./src/index.js
//

import style from "./main.css"; 

import {CreateDomElements} from './createDomElements'

let cat = new CreateDomElements();

cat.createCatName();
cat.createNumText();
cat.generateThumbnails();
cat.displayClickedImage();
cat.increaseNumClicksOnImage();


