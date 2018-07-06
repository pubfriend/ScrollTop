//define variables

let btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isFireFox = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 'undefined') {
    offset = docHeight / 4;
}

//es6 arrow function 
window.addEventListener('scroll', (e) => {

    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = (scrollPos > offset) ? "visible" : "";

});

//es6 arrow function 
btt.addEventListener('click', (e) => {

    e.preventDefault();

    if (isFireFox) {
        docElem.scrollTop = 0;
    } else {
        body.scrollTop = 0;
    }

});


//add click event