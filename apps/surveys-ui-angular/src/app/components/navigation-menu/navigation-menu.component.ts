import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.sass']
})
export class NavigationMenuComponent {
  
  menu_options = [
    {
      "label": "Menu Item 1",
      "link" : "/"
    },
    {
      "label": "Menu Item 2",
      "link" : "/"
    },
    {
      "label": "Menu Item 3",
      "link" : "/"
    }
  ]
}
