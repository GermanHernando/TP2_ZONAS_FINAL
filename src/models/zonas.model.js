const resultados = {
    zona1: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
    zona2: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
    zona3: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
    zona4: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
};

const zonasValidas = new Set(Object.keys(resultados));
const candidatosValidos = new Set(["candidatoA", "candidatoB", "candidatoC", "enblanco"]);

const postVoto = async (zona,candidato) =>{
    let mensaje = {};
    let candidatoOk = false;
    let zonaOk = false;
    if (!zonasValidas.has(zona)) {
        mensaje.error = "zona no correspondiente";
    }else{
        zonaOk = true
    }
    if (!candidatosValidos.has(candidato)) {
        mensaje.error = mensaje.error ? mensaje.error + ", candidato no válido" : "candidato no válido";  // Concatenamos errores en un solo string.
    }else{
        candidatoOk = true;
    }
    if(zonaOk && candidatoOk){
        if (!resultados[zona]) {
            resultados[zona] = {};  
        }
        if (!resultados[zona][candidato]) {
            resultados[zona][candidato] = 0;  
        }
        resultados[zona][candidato] ++;
        mensaje = { exito: "voto cargado" };
    }
    return mensaje
}

const getVotosPorZona = async (zona) => {
    let zonaBuscada = null
    if(resultados.has(zona)){
        zonaBuscada = resultados[zona]
    }
    return zonaBuscada
}

const getVotosGenerales = async () => {
    return resultados
}

const totalVotosCandidatos = async () => {
    const totales = { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 };
    for (const zona in resultados) {
        if (resultados.hasOwnProperty(zona)) {
            for (const candidato in resultados[zona]) {
                if (totales.hasOwnProperty(candidato)) {
                    totales[candidato] += Number(resultados[zona][candidato]) || 0;
                }
            }
        }
    }
    return totales
}

export default{
    postVoto,
    getVotosPorZona,
    getVotosGenerales,
    totalVotosCandidatos
}