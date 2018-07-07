//
// PATH OF THIS FILE: ./src/index.js
//

import style from "./main.css"; 

import {CreateDomElements} from './createDomElements'

const catInfo1 = {
    srcImage: '/dist/imgs/cat_01.jpg',
    catName: 'Sheeba'
}

const catText = 'cat-text';
const catImageClass = 'cat-img';

let cat = new CreateDomElements();

cat.createCatName(catInfo1.catName);
cat.createText(catText);

cat.createImage(catImageClass, catInfo1.srcImage);
cat.clickImage();
cat.generateThumbnails();
