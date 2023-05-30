import { Component, Input } from '@angular/core';
import { MenuOption } from './menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.sass']
})
export class MenuItemComponent {
 @Input() option: any;
}
