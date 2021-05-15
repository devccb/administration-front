import { Component, OnInit, Input } from '@angular/core';

interface BreadCrumb {
  text: string;
  link?: string;
}

@Component({
  selector: 'shared-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() breadcrumb: Array<BreadCrumb> = [];

  constructor() { }

  ngOnInit(): void {
  }

  isTheLast(breadcrumb: BreadCrumb): boolean {
    const index = this.breadcrumb.indexOf(breadcrumb);

    return index + 1 == this.breadcrumb.length;
  }

}
