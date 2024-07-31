import Exercise from "../models/exercise.model.js"


export const getExercise = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}

export const createExercise = async (req, res) => {
    let { username, description, duration, date } = req.body;

    duration = Number(duration);
    date = Date.parse(date);
    console.log({duration, date});
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    try {
        await newExercise.save();
        res.status(201).json(`Exercise added!`);
    } catch (error) {
        res.status(400).json(`Error: ${error}`);
    }
}