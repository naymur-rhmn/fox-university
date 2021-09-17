// popup video 
$(document).ready(function () {
    $('.video-play-btn').magnificPopup({
        type: 'video',
    });
})

// counter js
const getCountItems = document.querySelectorAll('.count-item');
if (getCountItems) {
    getCountItems.forEach(function (countItem) {
        const counterValueElement = countItem.querySelector('strong');
        const storeCurrentValue = parseInt(counterValueElement.textContent);

        let fromZero = 0;

        if (fromZero === 0) {
            counterValueElement.textContent = "0";
        }

        setInterval(function () {
            if (++fromZero <= storeCurrentValue) {
                counterValueElement.textContent = fromZero.toString();
            }
        }, 100); // set your speed (decrease)
    });
}
const getCountItems1 = document.querySelectorAll('.big-count-item');
if (getCountItems1) {
    getCountItems1.forEach(function (countItem) {
        const counterValueElement1 = countItem.querySelector('strong');
        const storeCurrentValue1 = parseInt(counterValueElement1.textContent);

        let fromZero1 = 0;

        if (fromZero1 === 0) {
            counterValueElement1.textContent = "0";
        }

        setInterval(function () {
            if (++fromZero1 <= storeCurrentValue1) {
                counterValueElement1.textContent = fromZero1.toString();
            }
        }, 13); // set your speed (decrease)
    });
}