import { Component, OnInit } from '@angular/core';
import { PageHeaderLabels } from '../labels';
import type { Header } from '../label-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public headerLabels: Header;
  constructor() { }

  ngOnInit(): void {
    this.headerLabels = PageHeaderLabels.AboutMe;
  }

}
