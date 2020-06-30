import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataProviderService, DateModel} from "../shared/data-provider.service";

@Component({
  selector: 'app-termin-anlegen',
  templateUrl: './termin-anlegen.component.html',
  styleUrls: ['./termin-anlegen.component.scss']
})
export class TerminAnlegenComponent implements OnInit {
  @Input() appdata: any;

  enabled = true;

  @Input('ngModel')
  wessen: string;
  wo: string;
  wann: string;
  dauer = 4;

  constructor(private readonly prov: DataProviderService) { }

  ngOnInit(): void {
    this.initTimePicker();
  }

  terminAnlegen(f: NgForm){
    this.enabled = false;
    console.log('neuer Termin: ' +  f.value.wessen + ' ' + f.value.wo + ' ' + f.value.wann + ' ' + f.value.dauer);
    let t = new DateModel(f.value.wo,f.value.wessen,f.value.wann,f.value.dauer,"S1");
    this.prov.addTermin(t);
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
}
