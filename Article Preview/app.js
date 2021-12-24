// the share button div
const shareButtonLight = document.querySelector('.share-button'); 
// the dark and white share icons 
const shareIconDark = document.querySelector('.dark');
const shareIconWhite = document.querySelector('.white');
// the pop-up windows (small and big screen)
const sharePopupSmall = document.querySelector('.share-popup-small');
const sharePopupBig = document.querySelector('.share-popup-big');
// the body selector for mouseup()
const body = document.querySelector('body');


// hiding pop-up windows
sharePopupSmall.classList.add('hidden-small')
sharePopupBig.classList.add('hidden-big')
// default button: light bg and dark icon
// removing classes for the dark button
shareIconDark.classList.remove('icon-hidden');
shareButtonLight.classList.remove('dark-bg');

// click function for the button
shareButtonLight.addEventListener('click', function(){
    // mobile screens 
    if (window.innerWidth > 900 ) {
        // showing the pop-up window
        sharePopupBig.classList.remove('hidden-big')
// changing the colors of the button when clicked
        shareIconDark.classList.add('icon-hidden');
        shareIconWhite.classList.remove('icon-hidden');
        shareButtonLight.classList.add('dark-bg')
// when clicked outsite of the button
// changing the colors back to light
        body.addEventListener('mouseup', function () {
            sharePopupBig.classList.add('hidden-big')
            shareButtonLight.classList.remove('dark-bg')
            shareIconWhite.classList.add('icon-hidden');
            shareIconDark.classList.remove('icon-hidden');
        });
    } 
// desktop screens 
    if (window.innerWidth <= 900 ) {
        sharePopupSmall.classList.remove('hidden-small')
        body.addEventListener('mouseup', function () {
            sharePopupSmall.classList.add('hidden-small')
        });
    }
});

    



