import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetsService.js";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
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