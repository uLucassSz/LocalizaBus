import { Schema, model } from "mongoose"

export default model('userdata', new Schema({
    email: { type: String, unique: true },
    name: { type: String, unique: true },
    password: { type: String },
    signature: { type: Boolean },
    cpf: { type: String },
    phone: { type: String },
    birthday: { type: String }
}))