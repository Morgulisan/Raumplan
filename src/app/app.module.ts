import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TagesansichtComponent } from './tagesansicht/tagesansicht.component';
import { WochenplanComponent } from './wochenplan/wochenplan.component';
import { TerminComponent } from './termin/termin.component';
import { BackgroundImageDirectiveModule } from './shared/background-image.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NeuerTerminComponent, NeuerTerminDialogPopComponent } from './shared/neuer-termin/neuer-termin.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports:
  [
    BrowserModule
    , FormsModule
    , BackgroundImageDirectiveModule
    , MatTabsModule
    , BrowserAnimationsModule
    , MatIconModule
    , MatButtonModule
    , MatTooltipModule
    , MatInputModule
    , MatTableModule
    , MatDialogModule
    , MatDatepickerModule
    , MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule
    , MatNativeDateModule
  ],
  declarations:
  [
    AppComponent
    , TagesansichtComponent
    , WochenplanComponent
    , TerminComponent
    , NeuerTerminComponent
    , NeuerTerminDialogPopComponent
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
