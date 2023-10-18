import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async getPlanets() {
        const planets = await dbContext.Planets.find()
        return planets
    }
    async createPlanet(planetInfo) {
        const planet = await dbContext.Planets.create(planetInfo)
        return planet
    }
    async getPlanetsByGalaxyId(galaxyId) {
        const planets = await dbContext.Planets.find({ galaxyId: galaxyId })
        return planets
    }

}

export const planetService = new PlanetService()