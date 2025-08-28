// Reusable Function
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// Heart Icons Functionality
document.getElementById('card-container').addEventListener('click', function(e){
    if (e.target.className.includes('love-icon')) {
        if (e.target.className.includes('text-red-500') === false) {
            e.target.classList.add('text-red-500');
            e.target.classList.remove('fa-regular');
            e.target.classList.add('fa-solid');
            const loveCounter = getElement('love-counter').innerText;
            getElement('love-counter').innerText = Number(loveCounter) + 1;
        }else {
            const loveCounter = getElement('love-counter').innerText;
            getElement('love-counter').innerText = Number(loveCounter) - 1;
            e.target.classList.remove('text-red-500');
            e.target.classList.add('fa-regular');
            e.target.classList.remove('fa-solid');
        }    
    }
});
