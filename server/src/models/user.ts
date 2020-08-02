import mongoose from "mongoose";

// Model você só irá criar a estrutura de como será a tabela no banco

interface userTypes extends Document{
    email: string;
    password: string;
}
const UserSchema= new mongoose.Schema({
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
        required:true,
    },
    // createAt: {
    //     type:Date,
    //     default:Date.now,
    // },

    },
    // Iŕa criar o campo CreatedAt e UpdatedAt automaticamente
    {
        timestamps: true,
    }
);

const User = mongoose.model('User',UserSchema)

export default User ;