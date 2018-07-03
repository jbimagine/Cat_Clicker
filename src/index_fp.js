//this is the function programming method of adding dom elements

let appId = document.getElementById('app');

// create the first cat image
let catImg1 = document.createElement('IMG');
catImg1.setAttribute('id', 'cat-img-1');
catImg1.setAttribute('src', '/dist/imgs/cat_01.jpg')

// create the second cat image
let catImg2 = document.createElement('IMG');
catImg2.setAttribute('id', 'cat-img-2');
catImg2.setAttribute('src', '/dist/imgs/cat_02.jpg')

//create the first cat's inner html
let catCntnrTxt1 = document.createElement('div');
catCntnrTxt1.innerHTML = 1;

catImg1.addEventListener('click', function(){
    catCntnrTxt1.innerHTML++;
})

//create the first cat's name
let catName1 = document.createElement('div');
catName1.innerHTML = "Sheeba";

//create the secon cat's inner html
let catCntnrTxt2 = document.createElement('div');
catCntnrTxt2.innerHTML = 1;

catImg2.addEventListener('click', function(){
    catCntnrTxt2.innerHTML++;
})

//create the second cat's name
let catName2 = document.createElement('div');
catName2.innerHTML = "Basil";

appId.appendChild(catName1);
appId.appendChild(catImg1);
appId.appendChild(catCntnrTxt1);
appId.appendChild(catName2);
appId.appendChild(catImg2);
appId.appendChild(catCntnrTxt2); 