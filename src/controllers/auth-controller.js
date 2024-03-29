import { UserService } from "../services/index.js";

const userService = new UserService();

export const signUp = async (req,res) => {
    try {
        const response = await userService.signUp({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        return res.status(200).json({
            success: true,
            message: `Successfully Created s User`,
            data: response,
            err: {} 
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            data: {},
           err: error
        });
    }
}

export const login = async (req,res) => {
    try {
        const response = await userService.signin(req.body);

        return res.status(200).json({
            success: true,
            message: `Successfully logged In`,
            data: response,
            err: {} 
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went Wrong",
            data: {},
            err: error
        });
    }
}