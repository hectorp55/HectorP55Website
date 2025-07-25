import { Component, OnInit } from '@angular/core';
import { ExperienceTemplate, Header } from '../label-interface';
import { PageHeaderLabels, Experiences } from '../labels';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: false
})
export class ExperienceComponent implements OnInit {

  public headerLabels: Header;
  public experiences: ExperienceTemplate[];
  constructor() { }

  ngOnInit(): void {
    this.headerLabels = PageHeaderLabels.Experience;
    this.experiences = Experiences;
  }

}
