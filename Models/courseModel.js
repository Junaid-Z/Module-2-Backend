import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    shortName: {
        type: String,
        required: true
    }
})
const courseModel = mongoose.model('courses', courseSchema)
export default courseModel;
