import User from "../model/userSchema.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{
    
    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default UserRepository;