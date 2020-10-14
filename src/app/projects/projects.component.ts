import { Component, OnInit } from '@angular/core';
import { Header, ProjectTemplate } from '../label-interface';
import { PageHeaderLabels, Projects } from '../labels';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public headerLabels: Header;
  public projects: ProjectTemplate[];
  constructor() { }

  ngOnInit(): void {
    this.headerLabels = PageHeaderLabels.Projects;
    this.projects = Projects;
  }

}
