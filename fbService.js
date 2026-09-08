import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
import { database } from "./fbConfig.js";

const ledRef = ref(database, "/temperature/")

export function listenLedState(callback) {
    return onValue(ledRef, (snapshot) => {
        callback(snapshot.val());
    });
}