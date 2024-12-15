import model from "../models/zonas.model.js"

const postVoto = async (zona, candidato) => {
const zonas = await model.postVoto(zona,candidato)
return zonas;
}

const getVotosPorZona = async (zona) => {
    const zonas = await model.getVotosPorZona(zona)
    return zonas
}

const getVotosGenerales = async () => {
    const zonas = await model.getVotosGenerales()
    return zonas
}

const totalVotosCandidatos = async () =>{
    const zonas = await model.totalVotosCandidatos()
    return zonas
}


export default{
    postVoto,
    getVotosPorZona,
    getVotosGenerales,
    totalVotosCandidatos
}