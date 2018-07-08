export class CreateDomElements 
{
    constructor()
    {
        this.appId = document.getElementById('app');
        this.catImgCntnr = document.getElementById('cat-img-cntnr');
        this.catNav = document.getElementById('cat-nav');
        this.navImagesCntnr = document.getElementById('nav-images-cntnr');
        this.navImagesWrapper = document.getElementById('nav-images-wrapper');
    }
    /******************************************************************** */
    createNumText() // creates the number div
    {
        this.createDivEl = document.createElement('div');
        this.createDivEl.setAttribute('class', 'cat-cntnr');
        this.catNav.appendChild(this.createDivEl);
    }
    /******************************************************************** */
    createCatName() // creates the cat's name div
    {
        this.createdCatName = document.createElement('div');
        this.createdCatName.setAttribute('class', 'cat-names')
        this.catNav.appendChild(this.createdCatName);
    }
    /******************************************************************** */
    increaseNumClicksOnImage () // will increase the number of clicks on the main image
    {
        this.createImgEl.addEventListener('click', () =>{
            this.createDivEl.innerHTML++;
        })
    } 
    /******************************************************************** */
    generateThumbnails () // will create thumbnails of images
    {
        const catImgs = {
            src1: '/dist/imgs/cat_01.jpg',
            src2: '/dist/imgs/cat_02.jpg',
            src3: '/dist/imgs/cat_03.jpg',
            src4: '/dist/imgs/cat_04.jpg',
            src5: '/dist/imgs/cat_05.jpg'
        }; 

        for(let key in catImgs)
        {
            this.navImages = document.createElement('IMG');
            this.navImages.setAttribute('class', 'nav-images')
            if(catImgs.hasOwnProperty(key))
            {
                this.navImagesWrapper.appendChild(this.navImages);
                this.navImages.setAttribute('src', catImgs[key]);
            }
        }
    }
    /******************************************************************** */
    displayClickedImage() // function will display the image that is clicked from the thumbnail 
    // along with the cat names and number of clicks
    {

        this.catNames = ['Sheeba', 'Basil', 'Laila', 'Rosey', 'Bruno'];

        this.clickedThumbNailImg;
        this.navImages = document.getElementsByClassName('nav-images');
        this.createImgEl = document.createElement('IMG');
            for(let indx = 0; indx < this.navImages.length; indx++)
            {
                this.navImages[indx].addEventListener('click', ()=>{
            this.createdCatName.innerHTML = this.catNames[indx];

                //display the number of clicks
                this.createDivEl.innerHTML = 0;
                this.clickedThumbNailImg = this.navImages[indx].src;
                this.createImgEl.setAttribute('class', 'cat-img');
                this.createImgEl.setAttribute('src', this.clickedThumbNailImg);
                this.catImgCntnr.appendChild(this.createImgEl);
                })
            }
    }
    /******************************************************************** */
}
