export class CreateDomElements 
{
    constructor()
    {
        this.createImgEl = document.createElement('IMG');
        this.createDivEl = document.createElement('div');
        this.createdCatName = document.createElement('div');
        this.appId = document.getElementById('app');
        this.catImgCntnr = document.getElementById('cat-img-cntnr');
        this.catNav = document.getElementById('cat-nav');
    }
    /******************************************************************** */
    createText(className)
    {
        this.createDivEl.setAttribute('class', className);
        this.createDivEl.innerHTML = 1;
        this.catNav.appendChild(this.createDivEl);
    }
    /******************************************************************** */
    createCatName(catName)
    {
        this.createdCatName.innerHTML = catName;
        this.catNav.appendChild(this.createdCatName);
    }
    /******************************************************************** */
    createImage(className, imgSrc)
    {
        this.createImgEl.setAttribute('class', className);
        this.createImgEl.setAttribute('src', imgSrc)
        this.catImgCntnr.appendChild(this.createImgEl);
    }
    /******************************************************************** */
    clickImage ()
    {
        this.createImgEl.addEventListener('click', () =>{
            this.createDivEl.innerHTML++;
        })

    }
    /******************************************************************** */

    generateThumbnails ()
    {

    }
    /******************************************************************** */
}
