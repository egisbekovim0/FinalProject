import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const getAllUser = async(req,res,next) => {
    let users
    try {
        users = await User.find()
    }catch (err){
        console.log(err)
    }
    if (!users) {
        return res.status(404).json({message: "no users found"})
    }
    return res.status(200).json({users})
}

export const signup = async (req,res, next) => {
    const {name, email,password, exercises} = req.body
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch (err){
       return  console.log(err)
    }
    if (existingUser){
        return res.status(400).json({message:"user already exists. Login instead"})
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name, 
        email,
        password: hashedPassword,
        exercises: exercises || []
    })

    try {
        await user.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({user})
}

export const login = async(req, res, next) => {
    const {email, password} = req.body
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch (err){
       return  console.log(err)
    }
    if (!existingUser){
        return res.status(404).json({message:"user is not found by this email"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)

    if (!isPasswordCorrect){
        return res.status(400).json({message:"incorrect password"})
    }
    return res.status(200).json({message:"login succesful"})
}

export const updateUser = async (req, res, next) => {
    const { name, email, password, user_level, xp, exercises} = req.body;
    const userId = req.params.id;

    try {
        const user = await User.findByIdAndUpdate(userId, {
            name,
            email,
            password: bcrypt.hashSync(password),
            user_level,
            xp,
            exercises: exercises || []
        }, { new: true });

        return res.status(200).json({ user });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateExerciseProgress = async (req, res, next) => {
    const userId = req.params.id;
    const exerciseId = req.params.exerciseId;
    const progress = req.body.progress;
  
    try {
      const result = await User.updateOne(
        { _id: mongoose.Types.ObjectId(userId), "exercises.exercise": mongoose.Types.ObjectId(exerciseId) },
        { $set: { "exercises.$.progress": progress } }
      );
  
      if (result.nModified === 0) {
        return res.status(404).json({ message: "User or Exercise not found" });
      }
  
      return res.status(200).json({ message: "Exercise progress updated successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  