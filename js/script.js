// // find elements
// var showPrevBtn = document.getElementById('show-prev-btn');
// var showNextBtn = document.getElementById('show-next-btn');
// var slideImage = document.getElementById('slide-image');

// // subscribe to events
// showPrevBtn.addEventListener('click', onShowPrevBtnClick);
// showNextBtn.addEventListener('click', onShowNextBtnClick);

// // create images array
// var imagesUrls = [];
// imagesUrls.push('https://contentservice.mc.reyrey.net/image_v1.0.0/2019-Cadillac-XT5-FWD_4dr_Luxury/1GYKNCRS8KZ223394/303951252');
// imagesUrls.push('https://cdn.jdpower.com/Models/400x200/2019-Toyota-86.jpg');
// imagesUrls.push('https://www.hyundaiusa.com/images/vehicles/pages/vlp/2019/santa-fe/compare-trims-400x200/2019-santa-fe-ltd-stormy-sea.png');
// imagesUrls.push('https://www.hyundaiusa.com/images/vehicles/pages/vlp/2020/elantra/main/compare-jellies/2020-elantra-se-symphony-silver.png');

// var currentImageIndex = 0;

// slideImage.src = imagesUrls[currentImageIndex];
// showPrevBtn.disabled = true;

// // function defination
// function onShowPrevBtnClick (e) {
//     currentImageIndex--;
//     slideImage.src = imagesUrls[currentImageIndex];
//     showNextBtn.disabled = false;
//     // disabled next button if need
//      if (currentImageIndex === 0) {
//         showPrevBtn.disabled = true;
//     }
// }
// function onShowNextBtnClick (e) {
//     currentImageIndex++;
//     slideImage.src = imagesUrls[currentImageIndex];
//     showPrevBtn.disabled = false;
//     // disabled next button if need
//     if (currentImageIndex === imagesUrls.length - 1) {
//         showNextBtn.disabled = true;
//     }
// }

var slider1 = new Slider();
var slider2 = new Slider();

slider1.start('myslider');
slider2.start('myslider2');

