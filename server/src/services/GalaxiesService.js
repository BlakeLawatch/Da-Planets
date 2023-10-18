import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async createGalaxy(galaxyInfo) {
        const galaxy = await dbContext.Galaxies.create(galaxyInfo)
        return galaxy
    }
    async getGalaxy() {
        const galaxy = await dbContext.Galaxies.find()
        return galaxy
    }

}

export const galaxiesService = new GalaxiesService