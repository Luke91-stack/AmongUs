// Globale Variable für den Alarmstatus
let alarms = [];

// Referenzen zu den DOM-Elementen
const alarmButton = document.getElementById('alarmButton');
const status = document.getElementById('status');

// Funktion zum Hinzufügen eines Alarms
const addAlarm = () => {
    const playerId = `Player-${Math.floor(Math.random() * 1000)}`; // Anonyme Spieler-ID
    const timestamp = new Date().toLocaleTimeString();

    // Speichere den Alarm
    alarms.push({ player: playerId, time: timestamp });

    // Aktualisiere den Status auf der Seite
    status.textContent = `Alarm von ${playerId} um ${timestamp}!`;
};

// Event Listener für den Button
alarmButton.addEventListener('click', () => {
    addAlarm();
    alert("Alarm ausgelöst!");
});
