import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onHeaderItemClick(itemName: string): void {
    console.log(`Clicked on: ${itemName}`);
    
  }
  onHeaderLogoClick(itemName: string): void{
    console.log(`Clicked on: ${itemName}`);
  }
}