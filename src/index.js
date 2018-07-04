//
// PATH OF THIS FILE: ./src/index.js
//

import style from "./main.css"; 

import {CreateDomElements} from './createDomElements'

//lets get all of the cat image source locations
const catImgs = {
    src1: '/dist/imgs/cat_01.jpg',
    src2: '/dist/imgs/cat_02.jpg',
    src3: '/dist/imgs/cat_03.jpg',
    src4: '/dist/imgs/cat_04.jpg',
    src5: '/dist/imgs/cat_05.jpg'
};

const catNames = ['Sheeba', 'Basil', 'Laila', 'Rosey', 'Bruno']

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
