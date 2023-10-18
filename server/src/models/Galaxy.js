import { Schema } from "mongoose";

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 25 },
        type: { type: String, required: true, maxLength: 25 },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)


GalaxySchema.virtual('creator', {
    localfield: 'creatorId',
    ref: 'Account',
    foreignField: "_id",
    justOne: true
})