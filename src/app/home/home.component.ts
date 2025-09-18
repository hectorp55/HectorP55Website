import { Component, OnInit } from '@angular/core';
import { PageHeaderLabels, TechnologyLogos } from '../labels';
import type { Header, TechLogos } from '../label-interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  public headerLabels: Header;
  public techLogos: TechLogos;
  constructor() { }

  ngOnInit(): void {
    this.headerLabels = PageHeaderLabels.AboutMe;
    this.techLogos = TechnologyLogos;
  }

}
