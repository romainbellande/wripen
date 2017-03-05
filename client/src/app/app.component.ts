import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'body', // tslint:disable-line
    templateUrl: './app.component.html'
})
export class AppComponent  implements OnInit {
  disabled = false;
  status: { isopen } = { isopen: false };

  constructor() {}


  toggled(open): void {
    console.log('Dropdown is now: ', open);
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}
