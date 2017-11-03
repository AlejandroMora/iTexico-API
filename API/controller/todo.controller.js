var TaskService = require(`../service/todo.service`);

exports.getTasks = async (req, res, next) => {
    try{ 
        const tasks = await TaskService.getTasks();
        return res.status(`200`).json({ status: 200, data: tasks, message: `Succesfully obtained` });
    } 
    catch (e){ return res.status(`400`).json({ status: 400, message: `${e.message}` }); }
}

exports.createTask = async (req, res, next) => {
    var newTask = {
        title:      req.body.title,
        description:req.body.description
    };
    try{ 
        const result = await TaskService.createTask(newTask);
        return res.status(`201`).json({ status: 201, data: result, message: `Succesfully created` });
    } 
    catch (e){ return res.status(`400`).json({ status: 400, message: `${e.message}` }); }
}

exports.updateTask = async (req, res, next) => {
    if(!req.body._id)
        return res.status(`400`).json({status: 400, message: "Id must be present"});
    var updatedTask = {
        _id:        req.body._id,
        title:      req.body.title,
        description:req.body.description,
        status:     req.body.status
    };
    try{ 
        const result = await TaskService.updateTask(updatedTask);
        return res.status(`200`).json({ status: 200, data: result, message: `Succesfully updated` });
    } 
    catch (e){ return res.status(`400`).json({ status: 400, message: `${e.message}` }); }
}

exports.deleteTask = async (req, res, next) => {
    if(!req.params._id)
        return res.status(`400`).json({status: 400, message: "Id must be present"});
    try{
        const result = await TaskService.deleteTask(req.params._id);
        return res.status(`204`).json({ status: 204, data: result, message: `Succesfully deleted` });
    } 
    catch (e){ return res.status(`400`).json({ status: 400, message: `${e.message}` }); }
}