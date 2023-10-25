import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  todolist: string []= [];
 task:string = "";
 
 add(){
  if (this.task == '') { 
  } 
  else { 
      this.todolist.push(this.task); 
      console.log(this.todolist)
      this.task = ''; 

 }
}
selected:any = 0;
remove(index:string)
{ 
  for (let item of this.todolist) {
    
    if (item == index)
    this.selected = this.todolist.indexOf(item);
    this.todolist.splice(this.selected)

    
    
  }

}

}
