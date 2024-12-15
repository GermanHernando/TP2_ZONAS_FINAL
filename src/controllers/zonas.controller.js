import service from "../services/zonas.services.js"

const postVoto = async (req,res) =>{
    const zona = req.body
    const calificacion = req.body
    const zonas = await service.postVoto(zona,calificacion)
    res.json(zonas)    
}

const getVotosPorZona = async(req,res) => {
    const zona = req.body
    const zonas = await service.getVotosPorZona(zona)
    res.json(zonas)
}

const getVotosGenerales = async(req,res) => {
    const zonas = await service.getVotosGenerales()
    res.json(zonas)
}

const totalVotosCandidatos = async(req,res) => {
    const zonas = await service.totalVotosCandidatos()
    res.json(zonas)
}

export default{
    postVoto,
    getVotosPorZona,
    getVotosGenerales,
    totalVotosCandidatos
}


