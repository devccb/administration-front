import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'core-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() regional!: string;
  @Input() administration!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
