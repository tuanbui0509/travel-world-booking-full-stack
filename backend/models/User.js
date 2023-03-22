import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },

        photo: {
            type: String,
        },

        role: {
            type: String,
            default: "user",
        },
    },
    { timestamps: true }
)

export default mongoose.model("User", userSchema)