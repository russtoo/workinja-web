// hero
const mediaQ = window.matchMedia('(max-width: 500px)');

function mediaQueryChange(q) {
    if (q.matches) {
        const elements = document.getElementsByClassName("tri");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "flex";
        }
    } 
}

mediaQ.addEventListener('change', () => {
    mediaQueryChange(mediaQ);
});

// assets
const mediaQuery = window.matchMedia('(max-width: 709px)');

function handleMediaQueryChange(query) {
    if (query.matches) {
        const elements = document.getElementsByClassName("assets");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.height = "140pt";
            elements[i].style.width = "140pt";
        }
    }
}

mediaQuery.addEventListener('change', () => {
    handleMediaQueryChange(mediaQuery);
});



// Manually call the event handler function on initialization
mediaQueryChange(mediaQ);
handleMediaQueryChange(mediaQuery);

