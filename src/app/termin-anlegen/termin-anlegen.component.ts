import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DateModel} from "../shared/data-provider.service";
import {RaumplanDataDataSource} from "../RaumplanData.data-source";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ControlOptions} from "@rxap/utilities";

@Component({
  selector: 'app-termin-anlegen',
  templateUrl: './termin-anlegen.component.html',
  styleUrls: ['./termin-anlegen.component.scss']
})
export class TerminAnlegenComponent implements OnInit {
  @Input() appdata: any;

  options: ControlOptions = [];

  enabled = true;

  @Input('ngModel')
  wessen: string;
  wo: string;
  wann: string;
  dauer = 4;

  constructor(readonly rpDataSource: RaumplanDataDataSource, private readonly http: HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    for(let i:number = 0; i < 96; i++){
      this.options.push(
        {
          value: i,
          display: this.ZeitName(i)
        }
      )
    }


    this.initTimePicker();
  }

  terminAnlegen(f: NgForm){

    this.enabled = false;
    console.log('neuer Termin: ' +  f.value.wessen + ' ' + f.value.wo + ' ' + f.value.wann + ' ' + f.value.dauer);
    let t = new DateModel(f.value.day ,f.value.wo,f.value.wessen,f.value.wann,f.value.dauer,"S1");
    this.addTermin(t);


  }

  initTimePicker(){
    // Plain JS using Materialize.css
    const timePickers = document.querySelectorAll('.timepicker');
    // @ts-ignore
    M.Timepicker.init(
      timePickers,
      {twelveHour: false, i18n: {cancel: 'Abbrechen', done: 'Fertig', clear: 'reset'}, container: 'container'}
    );
  }

  addTermin(termin: DateModel){
    const formData = new FormData();
    formData.append('auth','1');
    formData.append('action', 'new');
    formData.append('owner', termin.owner.toString());
    formData.append('room', termin.room.toString());
    formData.append('time', termin.dateTime.toString());
    formData.append('duration', termin.dateDuration.toString());
    formData.append('type', termin.type);
    this.http.post<any>("http://steam-tools.net/test/MST/webapp/raumplan/backend/interactP.php",formData).subscribe(
      data => {
        this.rpDataSource.refresh();
        //DataProviderService.dataCache.Dates.push(termin);
        console.log("Submitted succesfully: " + JSON.stringify(data) );
        this.openSnackBar("Termin angelegt")
        this.enabled = true;
      }
    );
  }


  openSnackBar(message: string) {
    this._snackBar.open(message, "Schließen",{
      duration: 2000,
    });
  }

  ZeitName(value): string {
  return  (value/4).toFixed(0)+":"+ (value % 4 * 15).toFixed(0).padStart(2,"0");
}
}
