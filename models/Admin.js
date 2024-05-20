import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
    },
    verified : {
        type : Boolean,
        default : false
    },
    paused : {
        type : Boolean,
        default : false
    },
    imageUploaded : {
        type: Array
    },
    loggedIn : {
        msec : {
            type : Number
        }
    },
    loggedOut : {
        msec : {
            type : Number
        }
    },
    level : {
        type: String,
        enum: ['viewer', 'uploader', 'editor', 'fullControl']
    }
}, {
    timestamps: true
})


const Admin = mongoose.model('Admin', adminSchema);

export default Admin