import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TaskService } from "./services/task.service";
import Task from "./models/task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private taskService:TaskService){}

  title = 'app';
  public newTask:Task = new Task();
  taskList:Task[];

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks) => {
      this.taskList = tasks;
    });
  }
  
  create(){
    this.taskService.createTask(this.newTask).subscribe(res => {
      this.taskList.push(res.data);
      this.newTask = new Task();
    });
  }
  update(task:Task){
    this.taskService.updateTask(task).subscribe();
  }
  delete(task:Task){
    this.taskService.deleteTask(task._id).subscribe(res => {
      this.taskList.splice(this.taskList.indexOf(task), 1);
    });
  }
  done(task:Task){
    task.status = true;
    this.update(task);
  }
  submitTask(event:KeyboardEvent, task:Task){
    if(event.keyCode == 13)
      this.update(task);
  }
}
