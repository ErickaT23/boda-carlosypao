const guests = [
    { id: "1", name: "Abby y Fer", passes: 1, gender: "neutral" },
    { id: "2", name: "Dr. Alex Enriquez", passes: 1, gender: "male" },
    { id: "3", name: "Dr. Anthony Méndez", passes: 1, gender: "male" },
    { id: "4", name: "Dr. Carlos Aquino", passes: 1, gender: "male" },
    { id: "5", name: "Dr. Daniel Villatoro", passes: 1, gender: "male" },
    { id: "6", name: "Dr. David Ayerdi", passes: 1, gender: "male" },
    { id: "7", name: "Dr. Diego Alvarado", passes: 1, gender: "male" },
    { id: "8", name: "Dr. Edgar Pérez y Señora", passes: 2, gender: "male" },
    { id: "9", name: "Dr. Félix Guzman", passes: 1, gender: "male" },
    { id: "10", name: "Dr. Fernando Romero", passes: 1, gender: "male" },
    // ... continúa con los demás
];

document.addEventListener("DOMContentLoaded", function () {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestId = queryParams.id;

    // Buscar el invitado en el array
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        let invitationText;

        if (guest.passes > 1) {
            if (guest.gender === "female") {
                invitationText = `¡${guest.name}, están invitadas!`;
            } else {
                invitationText = `¡${guest.name}, están invitados!`;
            }
        } else {
            if (guest.gender === "female") {
                invitationText = `¡${guest.name}, estás invitada!`;
            } else {
                invitationText = `¡${guest.name}, estás invitado!`;
            }
        }

        document.getElementById('guest-name').textContent = invitationText;
        document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});

