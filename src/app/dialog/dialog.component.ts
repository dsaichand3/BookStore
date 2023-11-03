import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(private dialog: MatDialog) { }

  myForm: FormGroup = new FormGroup({
    bookName: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    location: new FormControl('')
  });

  onSubmit() {
    const formData = this.myForm.value;
    console.log(formData);
  }

  closeDialog() {

  }
}
