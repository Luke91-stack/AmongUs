// Firebase configuration (replace with your own Firebase credentials)
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const alarmButton = document.getElementById('alarmButton');
const status = document.getElementById('status');

// Generate an anonymous ID for the player
const playerId = `Player-${Math.floor(Math.random() * 1000)}`;

// Listen for new alarms
database.ref('alarms/').on('value', (snapshot) => {
    const alarms = snapshot.val();
    if (alarms) {
        status.textContent = "Alarm ausgelöst von einem Spieler!";
    } else {
        status.textContent = "Keine Alarme gemeldet.";
    }
});

// Trigger an alarm
alarmButton.addEventListener('click', () => {
    database.ref('alarms/').set({
        triggeredBy: playerId,
        timestamp: Date.now()
    });
    alert("Alarm wurde ausgelöst!");
});
