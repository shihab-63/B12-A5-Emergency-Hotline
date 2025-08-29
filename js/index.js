// Reusable Function
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

//  javaScript Functionality
document.getElementById('card-container').addEventListener('click', function(e){
    // Heart Icons
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

    // Call Button Functionality
    const callButton = e.target.closest('.call-btn');
    if (callButton) {

        // All 
        const card = callButton.closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;
        const serviceSurName = card.querySelector('.service-sur-name').innerText;

        // Coin Counter
        const coinCounter = Number(getElement('coin-counter').innerText);

        if(coinCounter >= 20){
            getElement('coin-counter').innerText = coinCounter - 20;
        }else {
            alert("⚠️Sorry, you don't have enough coins to make a call.")
            return;
        }
        alert(`📞 Calling ${serviceSurName} Service ${serviceNumber}...`);


        // Call History
        const currentTime = new Date().toLocaleTimeString();
        const callHistory = document.createElement('div');

        callHistory.innerHTML = `
                <div class="bg-[#FAFAFA] flex items-center p-3.5 rounded-lg justify-between mb-2">
                    <div>
                        <h1 class="text-lg font-medium">${serviceName}</h1>
                        <p class="text-[#5c5c5c]">${serviceNumber}</p>
                    </div>
                    <div>
                        <p class="text-[#5c5c5c] font-medium">${currentTime}</p>
                    </div>
                </div>
            `;
        const historyContainer = getElement('call-history');
        historyContainer.prepend(callHistory);

    }

    // Copy Button 
        const copyButton = e.target.closest('.copy-btn');
        if (copyButton) {
            const serviceNumber = copyButton.parentNode.parentNode.children[2].children[0].textContent;
            navigator.clipboard.writeText(serviceNumber).then(function(){
                copyButton.innerText = 'Copied';
                setTimeout(function(){
                    copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copy` 
                },2000)
            })

            const copyContent = Number(getElement('copy-content').innerText);
            getElement('copy-content').innerText = copyContent + 1;
            
        }
    

});

// Clear History Button Functionality
    document.getElementById('clear-btn').addEventListener('click', function() {
    getElement('call-history').innerText = '';
});


