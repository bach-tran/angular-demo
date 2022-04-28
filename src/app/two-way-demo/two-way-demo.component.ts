import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-demo',
  templateUrl: './two-way-demo.component.html',
  styleUrls: ['./two-way-demo.component.css']
})
export class TwoWayDemoComponent implements OnInit {

  myVar: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
