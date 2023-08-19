function redirectToConfirmationPage() {
    // Cambia "ruta-de-la-pagina" por la URL real de la página de confirmación
    window.location.href = "Pagina1.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".seat");
    const reserveButton = document.getElementById("reserveButton");

    seats.forEach((seat) => {
        seat.addEventListener("click", () => {
            seat.classList.toggle("selected");
            updateReserveButton();
        });
    });

    function updateReserveButton() {
        const selectedSeats = document.querySelectorAll(".seat.selected");
        if (selectedSeats.length > 0) {
            reserveButton.removeAttribute("disabled");
        } else {
            reserveButton.setAttribute("disabled", "true");
        }
    }
});
