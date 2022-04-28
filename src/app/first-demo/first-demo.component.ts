import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-demo',
  templateUrl: './first-demo.component.html',
  styleUrls: ['./first-demo.component.css']
})
export class FirstDemoComponent implements OnInit {

  myVariable: string = 'hello world!!!!!!!';

  // Whenever the component first gets displayed, the constructor will be invoked by the Angular
  // framework to create the component object
  constructor() { }

  // This function will be called by Angular after the component has been constructed and fully rendered
  // to the screen
  ngOnInit(): void { // ngOnInit is an example of a "lifecycle hook" (a function that gets invoked
    // during a certain phase in the component's lifecycle)
  }

  alertMe() {
    alert('Hi');
  }

  /* This function gets invoked every time the input event happens because of event binding */
  onInputChange(event: Event) {
    /* This represents the actual input DOM element */
    let htmlInputElement: HTMLInputElement = event.target as HTMLInputElement;

    this.myVariable = htmlInputElement.value;
  }

}
