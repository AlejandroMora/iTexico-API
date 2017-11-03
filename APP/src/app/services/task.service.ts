import Task from "../models/task.model";
import { Observable } from "rxjs/Rx";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Response } from "@angular/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";

@Injectable()
export class TaskService{
    url = `http://localhost:3000`;
    api = `${this.url}/api/todo`;

    constructor(private http:HttpClient){}

    getTasks(): Observable<Task[]>{
        return this.http.get(this.api).map(res => { 
            return res["data"] as Task[]; 
        });
    }
    createTask(task:Task): Observable<any>{
        return this.http.post(this.api,task);
    }
    updateTask(task:Task): Observable<any> {
        return this.http.put(this.api, task);
    }
    deleteTask(id:string){
        let apiUrl = `${this.api}/${id}`;
        return this.http.delete(apiUrl);
    }

    private handleError(error:any): Promise<any>{
        console.error(`An error occurred`, error);
        return Promise.reject(error.message || error);
    }
}