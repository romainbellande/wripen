import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[navDropdown]'
})
export class NavDropdownDirective {
  @HostBinding('class.open') _open = false;

  isOpen() { return this._open; }

  open() {
    this._open = true;
  }

  close() {
    this._open = false;
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
}

@Directive({
  selector: '[navDropdownToggle]',
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}

export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
