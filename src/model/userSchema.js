import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true } );

userSchema.pre('save', function (next){
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(this.password, SALT);
    this.password = encryptedPassword;
    next();
})

const User = mongoose.model('User', userSchema);
export default User;