import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

 
public Color: string;
public Rating: number;
  constructor(){
  }

  public ngOnInit(): void {
    this.Color = "#008000";
    this.Rating = 75;
  }

}
