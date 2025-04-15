const guests = [
    { id: "1", name: "Abby y Fer", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "2", name: "Dr. Alex Enriquez", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "3", name: "Dra. Andrea López", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "4", name: "Dr. Kevin Valdez e hijos", passes: 3, adults: 1, kids: 2, gender: "male" },
    // ...continúa con los demás
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

    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        let invitationText;
        let genderText;

        // Determinar frase de invitación según género y cantidad
        if (guest.passes === 1) {
            genderText = guest.gender === "female" ? "estás invitada" : "estás invitado";
        } else {
            if (guest.gender === "female" && guest.adults + guest.kids === guest.passes) {
                genderText = "están invitadas";
            } else if (guest.gender === "male" && guest.adults + guest.kids === guest.passes) {
                genderText = "están invitados";
            } else {
                genderText = "están invitados";
            }
        }

        invitationText = `¡${guest.name}, ${genderText}!`;
        document.getElementById('guest-name').textContent = invitationText;

        let passesText = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
        if (guest.kids > 0) {
            passesText += ` (${guest.adults} adulto${guest.adults !== 1 ? 's' : ''} y ${guest.kids} niño${guest.kids !== 1 ? 's' : ''})`;
        }

        document.getElementById('passes').textContent = `Invitación válida por ${passesText}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
