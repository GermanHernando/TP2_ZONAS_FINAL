import express from 'express'
import controller from "../controllers/zonas.controller.js"

const router = express.Router()

router.post("/zonas",controller.postVoto)
router.get("/zonas/porZona", controller.getVotosPorZona)
router.get("/zonas/votosZonas", controller.getVotosGenerales)
router.get("/zonas/votosTotales",controller.totalVotosCandidatos)

export default router