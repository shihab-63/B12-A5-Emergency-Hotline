// Reusable Function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//  javaScript Functionality
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    // Heart Icons
    const loveIcon = e.target.closest(".love-icon");
    if (loveIcon) {
      const loveCounterElement = getElement("love-counter");
      let loveCounter = parseInt(loveCounterElement.innerText);
      loveCounter++;
      loveCounterElement.innerText = loveCounter;

      if (!loveIcon.classList.contains("text-red-500")) {
        loveIcon.classList.add("text-red-500", "fa-solid");
        loveIcon.classList.remove("fa-regular");
      }
    }

    // Call Button Functionality
    const callButton = e.target.closest(".call-btn");
    if (callButton) {
      // All
      const card = callButton.closest(".card");
      const serviceName = card.querySelector(".service-name").innerText;
      const serviceNumber = card.querySelector(".service-number").innerText;
      const serviceSurName = card.querySelector(".service-sur-name").innerText;

      // Coin Counter
      const coinCounter = Number(getElement("coin-counter").innerText);

      if (coinCounter >= 20) {
        getElement("coin-counter").innerText = coinCounter - 20;
      } else {
        alert("⚠️Sorry, you don't have enough coins to make a call.");
        return;
      }
      alert(`📞 Calling ${serviceSurName} Service ${serviceNumber}...`);

      // Call History
      const currentTime = new Date().toLocaleTimeString();
      const callHistory = document.createElement("div");

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
      const historyContainer = getElement("call-history");
      historyContainer.prepend(callHistory);
    }

    // Copy Button
    const copyButton = e.target.closest(".copy-btn");
    if (copyButton) {
      const serviceNumber =
        copyButton.parentNode.parentNode.children[2].children[0].textContent;
      navigator.clipboard.writeText(serviceNumber).then(function () {
        const copyContent = Number(getElement("copy-content").innerText);
        getElement("copy-content").innerText = copyContent + 1;
        alert(`Number ${serviceNumber} has been copied.`);

        copyButton.innerText = "Copied";
        setTimeout(function () {
          copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
        }, 500);
      });
    }
  });

// Clear History Button Functionality
document.getElementById("clear-btn").addEventListener("click", function () {
  getElement("call-history").innerText = "";
});
