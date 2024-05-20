import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
        enum: ['english', 'hindi', 'marathi', 'wallpaper']
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    likedBy: {
        type: Array
    },
    sharedBy: {
        type: Array
    },
    downloadedBy: {
        type: Array
    }
}, {
    timestamps : true
})

const Stock = mongoose.model('Stock',stockSchema)

export default Stock