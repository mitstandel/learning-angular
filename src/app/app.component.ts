import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crash_course';
  studentDetails = {
    name: 'Mitesh Tandel',
    age: 40,
    email: 'mitesh.tandel@gmail.com'
  }
  name = 'John Smith';
  text = 'Mitesh';
  bool = false;
  list = ['Milk', 'Eggs', 'Flowers', 'Chicken', 'Tofu', 'Apples'];

  greet(name: string):void {
    alert(`Hello ${name}!`);
  }

  onKeyUp(e:any) {
    this.text = e.target.value;
  }
}
