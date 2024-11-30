const Users = require('../../api/v1/users/model');
const {BadRequest, Unauthorized} = require('../../errors');
const {createTokenUSer, createJWT} = require('../../utils');

const signin = async (req) => {
    const {email, password} = req.body;
    if (!email || !password) {
        throw new BadRequest("Masukan Email dan Password");
    }

    const result = await Users.findOne({email: email});

    if (!result) {
        throw new Unauthorized("Data Invalid");
        
    }

    const isPasswordCorrect = await result.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new Unauthorized("Data Invalid");
    }

    const token = createJWT({payload: createTokenUSer(result)});

    return token;
};

module.exports = {
    signin,
}