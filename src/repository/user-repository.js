import User from "../model/userSchema.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{
    
    constructor(){
        super(User);
    }

}

export default UserRepository;