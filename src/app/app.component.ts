import { Component } from '@angular/core';
import {TaskModel} from 'src/app/shared/task-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'svdsTask';

  navigateToRegister(){
    
  }
  
myTasks:TaskModel[] =[
  {id:1, name:'ללמוד אנגולר', discerbition:'למצוא מדריך מוצלח', place:'בבית', priority:2 }, 
  {id:2, name:'לעשות משימה', discerbition:'אפליקציית ניהול משימות', place:'בבית על המחשב', priority:3}
  ];

onTaskAdded(data:{id:number, name:string, discerbition:string, place:string, priority:number}){
  console.log('the task: ' + data.id + data.name);
  if(this.myTasks.length > 4)
  {
    alert('מקסימום משימות נקבע ל-5!!')
  }
  var i = this.myTasks.filter(item => item.name == data.name);
  console.log(i.length);
  if (i.length==0)
  {
    data.id = this.myTasks.length+1;
    this.myTasks.push(new TaskModel(data.id, data.name, data.discerbition, data.place, data.priority));
  }
    
}
onTaskDeleted(data:{id:number, name:string, discerbition:string, place:string, priority:number}){
  console.log('the task to delete: ' + data.id + data.name);
  console.log(this.myTasks);
  var i = this.myTasks.indexOf(data);
  console.log(i);
  this.myTasks.splice(i, 1);
    
  }
}

