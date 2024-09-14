import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css'],
})
export class PipesTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  city: string = 'Hyderbad';
  Salary: number = 1000;
  person: Object = { firstname: 'sachin', lastname: 'tendulkar' };
  percentageFind: number = 0.72;
  // personFirstName=person.firstname;//we can't see the person object like this
  todayDate: Date = new Date();

  //For customPipe
  VideoDuration: number = 150;

  //age
  birthDate = new Date(1992, 10, 6); // Example birth date

  text = 'Hello World'; // Example text to reverse

  MaleName = 'Sachin Tendukar';
  FemaleName = 'Murmu droupathi';
}
