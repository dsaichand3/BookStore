import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {

  constructor(public matdialog: MatDialog) {}

  openDialog() {
    this.matdialog.open(DialogComponent);
  }

}
