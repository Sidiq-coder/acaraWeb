const Users = require('../../api/v1/users/model');
const Organizer = require('../../api/v1/organizers/model');
const {BadRequest} = require('../../errors');
const { StatusCodes } = require('http-status-codes');


const createOrganizer = async (req) => {
    const {organizer, role, email, password, confirmPassword, name} = req.body;

    if (password != confirmPassword) {
        throw new BadRequest("Password Tidak Sama");
        
    }

    const result = await Organizer.create({organizer});

    const users = await Users.create({
       email,
       name,
       password,
       role,
       organizer: result._id, 
    });

    delete users._doc.password;

    return users;
}

const createUsers = async (req) => {
    const {name, role, email, password, confirmPassword} = req.body;

    if (password != confirmPassword) {
        throw new BadRequest("Password Tidak Sama");
        
    }

    const result = await Users.create({
       email,
       name,
       password,
       role,
       organizer : req.user.organizer, 
    });

    return result;
}

const getAllUsers = async (req) => {
    const result = await Users.find();

    return result;
};

module.exports = {createOrganizer, createUsers, getAllUsers};