var Task = require(`../models/todo.model`);
var mongoose = require(`mongoose`);

exports.getTasks = async () => {
    try{ return await Task.find(); } 
    catch (e){ throw Error(`Error geting tasks`); }
}

exports.createTask = async (task) => {
    var newTask = {
        title:      task.title,
        description:task.description,
        alarm:      task.alarm ? new Date(task.alarm): new Date(),
        status:     false
    };
    try { return await new Task(newTask).save(); }
    catch (error) { throw Error(`Error creating task:\n\t ${error.message}`); }
}

exports.updateTask = async (task) => {
    var oldTask = await Task.findById(task._id);
    var updatedTask = {
        title:      task.title,
        description:task.description,
        alarm:      task.alarm ? new Date(task.alarm): oldTask.alarm,
        status:     task.status ? task.status : oldTask.status
    };
    try{ return await Task.findByIdAndUpdate(task._id, updatedTask ); } 
    catch (e){ throw Error(`Error updating task: ${e.message}`); }
}

exports.deleteTask = async (id) => {
    try{ return await Task.findByIdAndRemove(id); } 
    catch (e){ throw Error(`Error deleting task`); }
}