import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { galaxiesService } from "../services/GalaxiesService.js";
import { planetService } from "../services/PlanetsService.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxy)
            .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGalaxy)
    }

    async createGalaxy(req, res, next) {
        try {
            const galaxyInfo = req.body
            const userInfo = req.userInfo
            galaxyInfo.creatorId = userInfo.id
            const galaxy = await galaxiesService.createGalaxy(galaxyInfo)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
    async getGalaxy(req, res, next) {
        try {
            const galaxy = await galaxiesService.getGalaxy()
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
    async getPlanetsByGalaxyId(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const planets = await planetService.getPlanetsByGalaxyId(galaxyId)
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
}