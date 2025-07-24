import { Component, OnInit, Input } from '@angular/core';
import type { Header } from '../label-interface';

@Component({
    selector: 'app-header-card',
    templateUrl: './header-card.component.html',
    styleUrls: ['./header-card.component.scss'],
    standalone: false
})
export class HeaderCardComponent implements OnInit {

  @Input('header') Header: Header;

  constructor() { }

  ngOnInit(): void {
  }

}
