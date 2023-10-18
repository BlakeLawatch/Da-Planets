import { Auth0Provider } from "@bcwdev/auth0provider";
import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 50 },
        shape: { type: String, required: true, maxLength: 50 },
        habitable: { type: Boolean, required: true },
        creatorId: { type: Auth0Provider.getAuthorizedUserInfo }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)