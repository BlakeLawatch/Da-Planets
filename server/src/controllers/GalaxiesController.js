import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { galaxiesService } from "../services/GalaxiesService.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxy)
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
}