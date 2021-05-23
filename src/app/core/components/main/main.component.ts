import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  regional:       string = 'Pouso Alegre';
  administration: string = 'Camanducaia';

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('sidebar-mini');
  }

}
