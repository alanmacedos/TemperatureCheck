import { setLampState, listenLedState } from "./fbService.js";

const lampSwitch = document.getElementById("lampSwitch");

lampSwitch.addEventListener("change", () => {

    if (lampSwitch.checked) {
        setLampState(1)
            .then(() => {
                console.log("Lâmpada ligada. Enviando: 1");
            })
            .catch((error) => {
                console.error("Erro ao ligar a lâmpada:", error);
            })

    }

    else {
        setLampState(0)
            .then(() => {
                console.log("Lâmpada desligada. Enviando: 0");
            })
            .catch((error) => {
                console.error("Erro ao desligar a lâmpada:", error);
            })
    }
});

