import UserExerciseProgress from "../models/User-exercise-progress.js";

export const getAllUserExercises = async (req, res, next) => {
    try {
        const userExercises = await UserExerciseProgress.find();
        return res.status(200).json({ userExercises });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const addUserExercise = async (req, res, next) => {
    const { user, exercise } = req.body;

    try {
        const userExercises = new UserExerciseProgress({
            user,
            exercise
        });

        await userExercises.save();

        return res.status(200).json({ userExercises });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const updateUserExercise = async (req, res, next) => {
    const {progress, exercise_level } = req.body;
    const userExerciseId = req.params.id;

    try {
        const userExercise = await UserExerciseProgress.findByIdAndUpdate(userExerciseId, {
            progress,
            exercise_level
        });

        return res.status(200).json({ userExercise });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const getUserExerciseById = async (req, res, next) => {
    const userExerciseId = req.params.id;

    try {
        const userExercise = await UserExerciseProgress.findById(userExerciseId);
        if (!userExercise) {
            return res.status(404).json({ message: "User exercise not found" });
        }
        return res.status(200).json({ userExercise });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
export const getUserExerciseProgressByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const userExercise = await UserExerciseProgress.findOne(userId);
        if (!userExercise) {
            return res.status(404).json({ message: "User exercise not found" });
        }
        return res.status(200).json({ userExercise });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



export const deleteUserExercise= async (req, res, next) => {
    const userExerciseId = req.params.id;

    try {
        const userExerciserder = await UserExerciseProgress.findByIdAndDelete(userExerciseId);
        if (!userExerciserder) {
            return res.status(404).json({ message: "user exercise not found" });
        }
        return res.status(200).json({ message: "Successfully deleted" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};