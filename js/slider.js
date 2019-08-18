function Slider() {
    this.imagesUrls = [],
    this.currentImageIndex = 0,
    this.showPrevBtn = null,
    this.showNextBtn = null,
    this.slideImage = null,

    this.start = function (elId) {
        var that = this;

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn'),
        this.showNextBtn = el.querySelector('.show-next-btn'),
        this.slideImage = el.querySelector('.slide-img'),

        // subscribe to events
        this.showPrevBtn.addEventListener('click', function(e){
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function(e){
            that.onShowNextBtnClick(e);
        });

        // create images array
        this.imagesUrls.push('https://autohelp-spb.ru/images/stories/news/new-chevrolet-corvette-stingray-2013-3.jpg');
        this.imagesUrls.push('https://sites.google.com/site/carsthemes/2015-bmw-i8/header.jpg');
        this.imagesUrls.push('https://blogmedia.dealerfire.com/wp-content/uploads/sites/673/2017/09/Lamborghini-Aventador-S-Roadster-side-view-top-up_o.jpg');
        this.imagesUrls.push('http://www.alfaromeo.ie/content/dam/alfaromeo/ie/en/news/detais/4C_Spider.jpg');
        this.imagesUrls.push('http://www.2bsafewarranty.com/wp-content/uploads/2016/07/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%81%D0%B0%D0%B9%D1%82-%D0%B0%D0%B2%D1%82%D0%BE.jpg');

        this.slideImage.src =  this.imagesUrls[ this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImage.src =  this.imagesUrls[ this.currentImageIndex];
        this.showNextBtn.disabled = false;
        // disabled next button if need
        if ( this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };

    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImage.src =  this.imagesUrls[ this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        // disabled next button if need
        if ( this.currentImageIndex ===  this.imagesUrls.length - 1) {
            this.showNextBtn.disabled = true;
        }
    };
};