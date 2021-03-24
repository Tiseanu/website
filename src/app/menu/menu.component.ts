import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  displayMenu = false;
  toggleMenu(elem: {}) {
    this.displayMenu = !this.displayMenu; 
  }

  goTo(id: string):void {
    const elementList = document.querySelectorAll(id);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth'});
}

  constructor() { }

  ngOnInit(): void {
  }

}
