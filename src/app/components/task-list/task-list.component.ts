import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TaskModel} from 'src/app/shared/task-model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() 
  deleteTask = new EventEmitter<TaskModel>();

  @Input()
  tasks:TaskModel[] = [];
  
  onDeleteTask(toDeleteTask){
    console.log("I am here!!");
    this.deleteTask.emit(toDeleteTask);
  }

}
