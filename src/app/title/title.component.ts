import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  
  constructor() { }
  
  title = "Magazine";

  storyTitle = "How to design a bike lane";

  storyBody = "Creat obvious and clearly marked pathways.\n" + 
  "Devise routes with destinations:\n"+
  "Barks\n"+
  "Schools\n"+
  "Commercial corridors";

  ngOnInit(): void {
  }

}
