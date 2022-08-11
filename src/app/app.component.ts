import { Component } from '@angular/core';

// @ represent component decorator
// template - View
// class - Controller
// styles - For better visualization
// selector - custom tag to load the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crash_course';
  greet = 'Hello world!'
}
