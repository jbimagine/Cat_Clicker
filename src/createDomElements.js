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
    createText(className)
    {
        this.createDivEl = document.createElement('div');
        this.createDivEl.setAttribute('class', className);
        this.createDivEl.innerHTML = 1;
        this.catNav.appendChild(this.createDivEl);
    }
    /******************************************************************** */
    createCatName(catName)
    {
        this.createdCatName = document.createElement('div');
        this.createdCatName.innerHTML = catName;
        this.catNav.appendChild(this.createdCatName);
    }
    /******************************************************************** */
    iterClicksOnImage ()
    {
        this.createImgEl.addEventListener('click', () =>{
            this.createDivEl.innerHTML++;
        })
    } 
    /******************************************************************** */

    generateThumbnails ()
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
    generateCatNames()
    {
        const catNames = {
            name1: 'Sheeba',
            name2: 'Basil',
            name3: 'Laila',
            name4: 'Rosey',
            name5: 'Bruno'
        }
    }
    /******************************************************************** */
    displayClickedImage()
    {
        this.clickedThumbNailImg;
        this.navImages = document.getElementsByClassName('nav-images');
        this.createImgEl = document.createElement('IMG');
            for(let indx = 0; indx < this.navImages.length; indx++)
            {
                this.navImages[indx].addEventListener('click', ()=>{
                    this.clickedThumbNailImg = this.navImages[indx].src;
                    this.createImgEl.setAttribute('class', 'cat-img');
                    this.createImgEl.setAttribute('src', this.clickedThumbNailImg);
                    this.catImgCntnr.appendChild(this.createImgEl);
                })
        }
        
    }
    /******************************************************************** */
}
