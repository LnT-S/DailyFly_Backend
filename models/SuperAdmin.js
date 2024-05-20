import mongoose from "mongoose";

const superAdminSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Authentication",
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

export default SuperAdmin