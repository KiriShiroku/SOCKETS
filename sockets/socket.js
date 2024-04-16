function socket(io) {
    io.on("connection", (socket) => {
        socket.on("pregunta", (pregunta) => {
            var respuesta = obtenerRespuesta(pregunta);
            socket.emit("respuesta", respuesta);
        });
    });
}

function obtenerRespuesta(pregunta) {
    switch (pregunta) {
        case "1":
            return "Es recomendable empezar con los cubos rubik de venta común.";
        case "2":
            return "No hay un lugar en específico, pueden ser conseguidos en centros comerciales.";
        case "3":
            return "No, de hecho cualquier cubo rubik tiene las mismas características.";
        case "4":
            return "Mediante la practica constante y guías sobre como resolver los cubos.";
        case "5":
            return "No es del todo recomendable aunque depende demasiado de la opción por la que quiere empezar.";
        default:
            return "Lo siento, no tengo una respuesta para esa pregunta.";
    }
}

module.exports = socket;



