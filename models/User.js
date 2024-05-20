import mongoose from "mongoose";
import multer from 'multer'
import path from 'path'
const __dirname = path.resolve(path.dirname(''));
const AVATAR_PATH = path.join('/uploads/users/avatars');

const userSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Authentication",
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    userName : {
        type: String,
    },
    phoneNo : {
        type: Number,
    },
    avatar : {
        type : String
    },
    bday : {
        day : {
            type : Number
        },
        month : {
            type : Number
        },
        year : {
            type : Number
        }
    }
},{
    timestamps : true
})



let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, AVATAR_PATH))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

userSchema.statics.uploadAvatar = multer({storage : storage}).single('avatar');
userSchema.statics.avatarPath = AVATAR_PATH;

const User = mongoose.model('User', userSchema);

export default User