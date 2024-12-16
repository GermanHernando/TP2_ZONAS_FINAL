const resultados = [
    {zona:"zona1", candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
    { zona:"zona2",candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
    { zona:"zona3",candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
    { zona:"zona4",candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
];

const zonasValidas = new Set(resultados.map(r => r.zona));  // Obtenemos las zonas válidas desde los objetos en el arreglo
const candidatosValidos = new Set(["candidatoA", "candidatoB", "candidatoC", "enblanco"]);

const postVoto = async (zona, candidato) => {
    let mensaje = {};
    let candidatoOk = false;
    let zonaOk = false;

    // Verificación de la zona
    if (!zonasValidas.has(zona)) {
        mensaje.error = "zona no correspondiente";
    } else {
        zonaOk = true;
    }

    // Verificación del candidato
    if (!candidatosValidos.has(candidato)) {
        mensaje.error = mensaje.error ? mensaje.error + ", candidato no válido" : "candidato no válido";
    } else {
        candidatoOk = true;
    }

    // Si tanto la zona como el candidato son válidos, procesamos el voto
    if (zonaOk && candidatoOk) {
        // Buscar el objeto de la zona en el arreglo resultados
        const zonaEncontrada = resultados.find(z => z.zona === zona);

        if (zonaEncontrada) {
            zonaEncontrada[candidato]++;  // Incrementamos el contador del candidato seleccionado
            mensaje = { exito: "voto cargado" };
        } else {
            mensaje.error = "Zona no encontrada en los resultados";
        }
    }

    return mensaje;
};

const getVotosPorZona = async (zona) => {
    // Buscamos la zona dentro del array de resultados
    let zonaBuscada = resultados.find(z => z.zona === zona);
    
    // Si la zona fue encontrada, la retornamos. Si no, retornamos null
    return zonaBuscada ? zonaBuscada : null;
}

const getVotosGenerales = async () => {
    return resultados
}

const totalVotosCandidatos = async () => {
    const totales = { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 };
    
    // Iterar sobre el array de resultados
    for (const zona of resultados) {
        // Iterar sobre los candidatos dentro de cada zona
        for (const candidato in zona) {
            // Excluir la propiedad 'zona' que no es un candidato
            if (candidato !== "zona" && totales.hasOwnProperty(candidato)) {
                // Sumar los votos del candidato a los totales
                totales[candidato] += Number(zona[candidato]) || 0;
            }
        }
    }
    
    return totales;
}

export default{
    postVoto,
    getVotosPorZona,
    getVotosGenerales,
    totalVotosCandidatos
}