import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	contact: {
		type: String,
		required: true
	}
})
const studentModel = mongoose.model('students', studentSchema)
export default studentModel;
