import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';


export interface DialogData {
  appdata: any;
  animal: string;
  name: string;
}


@Component({
  selector: 'app-neuer-termin',
  templateUrl: './neuer-termin.component.html',
  styleUrls: ['./neuer-termin.component.scss']
})
export class NeuerTerminComponent implements OnInit {

  @Input() name: string;
  @Input() animal: string;
  @Input() date: string;
  @Input() data: any;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    console.log(this.name);
    const dialogRef = this.dialog.open(NeuerTerminDialogPopComponent, {
      width: '650px',
      data: {name: this.name, animal: this.animal, date: this.date, appdata: this.data}
    });
    const timePickers = document.querySelectorAll('.timepicker');
    // Plain JS using
    // @ts-ignore
    M.Timepicker.init(
        timePickers,
        {twelveHour: false, i18n: {cancel: 'Abbrechen', done: 'Fertig', clear: 'reset'}, container: 'container'}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'app-neuer-termin-dialog-pop',
  templateUrl: 'neuer-termin-dialog-pop.component.html',
})
export class NeuerTerminDialogPopComponent {

  constructor(
    public dialogRef: MatDialogRef<NeuerTerminDialogPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
