import Exercise from "../models/exercise.model.js"


export const getAllExercise = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json({
            message: `Success get all data`,
            data: exercises,
        });
    } catch (error) {
        res.status(400).json({
            error: `Error: ${error}`,
        });
    }
}

export const getOneExercise = async (req, res) => {
    const id = req.params.id;

    try {
        const exercise = await Exercise.findById(id);
        res.status(200).json({
            message: `Success get data by ${id}`,
            data: exercise,
        });
    } catch (error) {
        res.status(400).json({
            error: `Error: ${error}`,
        });
    }
}

export const createExercise = async (req, res) => {
    let { username, description, duration, date } = req.body;

    duration = Number(duration);
    date = Date.parse(date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    try {
        await newExercise.save();
        res.status(201).json({
            message: `Exercise added`,
        });
    } catch (error) {
        res.status(400).json({
            error: `Error: ${error}`,
        });
    }
}

export const updateExercise = async (req, res) => {
    const id = req.params.id;
    let { username, description, duration, date } = req.body;

    duration = Number(duration);
    date = Date.parse(date);

    try {
        await Exercise.findByIdAndUpdate(id, {
            username,
            description,
            duration,
            date
        }, { new: true, runValidators: true })
        res.status(200).json({
            message: 'Exercise updated'
        })
    } catch (error) {
        res.status(400).json({
            error: `Error: ${error}`
        })
    }
}

export const deleteExercise = async (req, res) => {
    const id = req.params.id;


    try {
        await Exercise.findByIdAndDelete(id);
        res.status(200).json({
            message: "Exercise deleted"
        })
    } catch (error) {
        res.status(400).json({
            error: `Error: ${error}`
        })
    }
}