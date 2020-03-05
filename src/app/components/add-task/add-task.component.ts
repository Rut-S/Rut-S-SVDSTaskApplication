import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {TaskModel} from 'src/app/shared/task-model'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  @Output() 
  addTask = new EventEmitter<TaskModel>();


  ngOnInit() {
  }
  task :TaskModel =  new TaskModel(0, '', '', '', 2);

onAddTask(){
  this.addTask.emit(this.task);
}
}
