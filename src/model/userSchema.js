import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateJWT = function generate(){
    return jwt.sign({id: this._id, email: this.email}, 'twitter_secret',{
        expiresIn: '1h'
    });
}

const User = mongoose.model('User', userSchema);
export default User;