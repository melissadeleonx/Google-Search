
// To replicate the expand feature of Google's search bar
function autoExpandInput(input) {
    input.style.height = 'auto';
    input.style.height = (input.scrollHeight + 2) + 'px'; // Adding 2 pixels to prevent scroll bars
    console.log('Input height adjusted:', input.style.height);
}

autoExpandInput(document.querySelector('.search-input'));
