let selectedBarber = "";
let selectedTime = "";

const API_URL =
"https://script.google.com/macros/s/AKfycbzD66_BA8Zc95bN8U3JT3F0LWZAaNUSARn_tLW4a3n5HG_eghlhGW_80JR0peel9ZhBVA/exec";

function selectBarber(barber) {
    selectedBarber = barber;
    alert("Ընտրված վարպետը՝ " + barber);
}

document.querySelectorAll(".time-btn").forEach(button => {
    button.addEventListener("click", function () {

        document.querySelectorAll(".time-btn").forEach(btn => {
            btn.style.background = "#1b1b1b";
            btn.style.color = "white";
        });

        this.style.background = "#d4af37";
        this.style.color = "black";

        selectedTime = this.innerText;
    });
});

document.getElementById("bookingForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const date = document.getElementById("date").value;

    if (!selectedBarber) {
        alert("Ընտրեք վարպետին");
        return;
    }

    if (!selectedTime) {
        alert("Ընտրեք ժամը");
        return;
    }

    if (!date) {
        alert("Ընտրեք ամսաթիվը");
        return;
    }

    const booking = {
        date: date,
        time: selectedTime,
        barber: selectedBarber,
        name: name,
        phone: phone
    };

    try {

        await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(booking)
        });

        alert("Ամրագրումը հաջողությամբ գրանցվեց");

        this.reset();

    } catch(err) {

        alert("Սխալ գրանցման ժամանակ");

    }

});
