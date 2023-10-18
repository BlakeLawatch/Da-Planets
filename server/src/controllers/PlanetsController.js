import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetsService.js";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanet)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }
    async getPlanet(req, res, next) {
        try {
            const planets = await planetService.getPlanets()
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async createPlanet(req, res, next) {
        try {
            const planetInfo = req.body
            const userInfo = req.userInfo
            planetInfo.creatorId = userInfo.id
            const planet = await planetService.createPlanet(planetInfo)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}