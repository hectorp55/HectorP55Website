import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {

  @Input('title') title: string;
  @Input('description') description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
