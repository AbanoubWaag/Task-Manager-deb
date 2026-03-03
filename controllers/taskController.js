const Task = require("../models/Task");



// const createTask = (req, res) => {
//   const { title } = req.body;
//   if (!title) return res.status(400).json({ msg: "Title is required" });

//   Task.create({ title }).then((task) => {
//     res.status(200).json({ msg: "Task Created", data: task });
//   });
// };

const createTask = async (req, res) => {
  const { title , isCompleted} = req.body;

  if (!title) {
    return res.status(400).json({ 
      success: false,
      msg: "Title is required"
    });
  }

  try {
    const task = await Task.create({ title ,isCompleted});
    res.status(201).json({
      success: true,
      msg: "Task Created",
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server Error",
      error: error.message
    });
  }
};



// const getTasks = (req, res) => {
//   Task.find().then((tasks) => {
//     res.status(200).json({ msg: "Tasks List", data: tasks });
//   });
// };



const getTasks = async (req,res) => {
  
  try { 
    const tasks = await Task.find();
    res.status(200).json({
      success: true,
      msg: "Tasks List",
      data: tasks
    })

  }catch (error) {
    res.status(500).json({
      success: false,
      msg: "server Error",
      error: error.message
    })

  }
}






// const createTaskWithCheck = async (req, res) => {
//   const { title } = req.body;
//   const exist = await Task.findOne({ title });
//   if (exist) return res.status(400).json({ msg: "Task already exists" });

//   const task = await Task.create({ title });
//   res.status(201).json({ msg: "Task Created", data: task });
// };

const createTaskWithCheck = async (req, res) => {
  const { title , isCompleted} = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      msg: "Title is required"
    });
  }

  try {
    const exist = await Task.findOne({ title , isCompleted});
    if (exist) {
      return res.status(400).json({
        success: false,
        msg: "Task already exists"
      });
    }

    const task = await Task.create({ title , isCompleted});
    res.status(201).json({
      success: true,
      msg: "Task Created",
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server Error",
      error: error.message
    });
  }
};





module.exports = {
  createTask,
  getTasks,
  createTaskWithCheck,
};
