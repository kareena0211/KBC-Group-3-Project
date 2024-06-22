import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile_number: { type: String, required: true },
    role: { type: String, required: true, enum: ['user', 'admin'] },
    adminToken:String
});

const Register = mongoose.model("Register", RegisterSchema);

export { Register };
