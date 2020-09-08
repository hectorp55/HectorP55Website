import { Component, OnInit } from '@angular/core';
import { PageHeaderLabels } from '../labels';
import { Header } from '../label-interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public headerLabels: Header;
  ngOnInit(): void {
    this.headerLabels = PageHeaderLabels.Contact;

    console.log(this.headerLabels);
    console.log(PageHeaderLabels);
    console.log('Test');
  }

}
