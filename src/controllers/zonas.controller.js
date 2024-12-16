import service from "../services/zonas.services.js"

const postVoto = async (req,res) =>{
    try {
    const {zona,candidato} = req.body
    const zonas = await service.postVoto(zona,candidato)
    res.json(zonas)    
    } catch (error) {
        console.log(`Ha ocurrido un error: ${error}}`)
    }
}

const getVotosPorZona = async(req,res) => {
   try {
    const zona = req.body
    const zonas = await service.getVotosPorZona(zona)
    res.json(zonas)
   } catch (error) {
    console.log(`Ha ocurrido un error: ${error}}`)
   }
   
}

const getVotosGenerales = async(req,res) => {
  try {
    const zonas = await service.getVotosGenerales()
    res.json(zonas)
  } catch (error) {
    console.log(`Ha ocurrido un error: ${error}}`)
  }
   
}

const totalVotosCandidatos = async(req,res) => {
  try {
    const zonas = await service.totalVotosCandidatos()
    res.json(zonas)
  } catch (error) {
    console.log(`Ha ocurrido un error: ${error}}`)
  }
    
}

export default{
    postVoto,
    getVotosPorZona,
    getVotosGenerales,
    totalVotosCandidatos
}


