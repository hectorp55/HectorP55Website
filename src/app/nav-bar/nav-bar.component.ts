import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    standalone: false
})
export class NavBarComponent implements OnInit {

  @ViewChild('NavBar') navBar;
  public navHeight: string;
  public navFontSize: string;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      this.navFontSize = '16px';
      this.navHeight = '80px';
    } else {
      this.navFontSize = '20px';
      this.navHeight = '140px';
    }
  }
}
