import { Auth0Provider } from "@bcwdev/auth0provider";
import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 50 },
        shape: { type: String, required: true, maxLength: 50 },
        habitable: { type: Boolean, required: true },
        galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)