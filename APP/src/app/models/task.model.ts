class Task{
    _id:string;
    title:string;
    description:string;
    date:Date;
    status:boolean;

    constructor(){
        this.title = "";
        this.description = "";
        this.date = new Date();
        this.status = false;
    }
}

export default Task;