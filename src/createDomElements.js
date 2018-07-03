export class CreateDomElements 
{
    constructor()
    {
        this.createImgEl = document.createElement('IMG');
        this.createDivEl = document.createElement('div');
        this.createdCatName = document.createElement('div');
        this.appId = document.getElementById('app');
    }
    createText(className)
    {
        this.createDivEl.setAttribute('class', className);
        this.createDivEl.innerHTML = 1;
        this.appId.appendChild(this.createDivEl);
    }

    createCatName(catName)
    {
        this.createdCatName.innerHTML = catName;
        this.appId.appendChild(this.createdCatName);
    }

    createImage(className, imgSrc)
    {
        this.createImgEl.setAttribute('class', className);
        this.createImgEl.setAttribute('src', imgSrc)
        this.appId.appendChild(this.createImgEl);
    }

    clickImage ()
    {
        this.createImgEl.addEventListener('click', () =>{
            this.createDivEl.innerHTML++;
        })

    }

    generateThumbnails ()
    {

    }
}
