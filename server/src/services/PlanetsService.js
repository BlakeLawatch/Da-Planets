import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async createPlanet(planetInfo) {
        const planet = await dbContext.Planets.create(planetInfo)
        return planet
    }

}

export const planetService = new PlanetService()