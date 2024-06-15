import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile_number: { type: String, required: true, unique: true},
    role: { type: String, required: true}
});

const Register = mongoose.model("register", RegisterSchema);

export { Register };
