import mongoose from "mongoose";
import bcrypt, { hash } from "bcryptjs"
interface Uschema {
    name: String;
    email: String;
    password: String;
    createAt: Date;

}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique:true,
        required:true,
        lowercase: true,
    },
    password: {
        type:String,
        select:false,
        required:true,
    },
    createAt: {
        type:Date,
        default:Date.now,
    },

});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash((this.password as String), 10);
    this.password: String = hash;
    next();
})
const User = mongoose.model('User',UserSchema)

export default User;