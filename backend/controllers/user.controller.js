import User from '../models/user.model.js'

export const getUser = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users)
    }catch(error){
        res.status(400).json(`Error: ${error}`)
    }
}


export const createUser = async (req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    try {
        await newUser.save();
        res.status(201).json('User added!')
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}