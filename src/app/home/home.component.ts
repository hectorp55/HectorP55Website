import { Component, OnInit } from '@angular/core';
import { labels } from '../labels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public headerLabels;
  constructor() { }

  ngOnInit(): void {
    this.headerLabels = labels.aboutMe;
  }

}
