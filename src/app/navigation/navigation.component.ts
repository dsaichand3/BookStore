import { Component } from '@angular/core';
import { SellComponent } from '../sell/sell.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(public matdialog: MatDialog) {}

  sellClicked() {

    this.matdialog.open(SellComponent);

  }
  accountClicked(){

  }

  logoutClicked(){
    
  }

}
