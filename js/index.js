// Reusable Function
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// Heart Icons javaScript Functionality
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

    // All Files

    const callButton = e.target.closest('.call-btn')
    if (callButton) {
        const serviceName = callButton.parentNode.parentNode.children[1].children[1].innerText;
        const serviceNumber = callButton.parentNode.parentNode.children[2].children[0].innerText;
        

        // Coin Counter
        const coinCounter = Number(getElement('coin-counter').innerText);

        if(coinCounter >= 20){
            getElement('coin-counter').innerText = coinCounter - 20;
        }else {
            alert("Sorry, you don't have enough coins to make a call.")
            return;
        }
        alert(`📞 Calling ${serviceName} Service ${serviceNumber}...`)
    }
});


// Call Buttons javaScript Functionality
// document.getElementById('card-container').addEventListener('click', function(e){
    
// })
