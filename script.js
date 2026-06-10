let selectedBarber = "";
let selectedTime = "";

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

document.getElementById("bookingForm").addEventListener("submit", function(e) {

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

    alert(
        "Ամրագրումը հաստատված է!\n\n" +
        "Վարպետ՝ " + selectedBarber + "\n" +
        "Ամսաթիվ՝ " + date + "\n" +
        "Ժամ՝ " + selectedTime + "\n" +
        "Անուն՝ " + name + "\n" +
        "Հեռախոս՝ " + phone
    );

    this.reset();
});
