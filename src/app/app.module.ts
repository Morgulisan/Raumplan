import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RaumansichtComponent } from './raumansicht/raumansicht.component';
import { TagesansichtComponent } from './tagesansicht/tagesansicht.component';
import { TerminComponent } from './tagesansicht/termin/termin.component';
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
import { RaumTerminComponent } from './raumansicht/raum-termin/raum-termin.component';
import { FilterRoomsPipe } from './shared/filter-rooms.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { TerminAnlegenComponent } from './termin-anlegen/termin-anlegen.component';
import {HttpClientModule} from "@angular/common/http";
import {FlexModule} from "@angular/flex-layout";
import {DataSourceCollectionDirectiveModule, DataSourceDirectiveModule} from "@rxap/data-source/directive";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppRoutingModule} from "./app-routing.module";
import { TabComponent } from './tab/tab.component';
import { DateToRouterLinkPipe } from './shared/date-to-router-link.pipe';


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
      , MatToolbarModule
      , MatSelectModule
      , HttpClientModule, FlexModule, DataSourceCollectionDirectiveModule, DataSourceDirectiveModule,
      AppRoutingModule,
    ],
  providers: [
    MatDatepickerModule
    , MatNativeDateModule
    , MatSnackBar
  ],
  declarations:
  [
    AppComponent
    , RaumansichtComponent
    , TagesansichtComponent
    , TerminComponent
    , NeuerTerminComponent
    , NeuerTerminDialogPopComponent, RaumTerminComponent, FilterRoomsPipe, TerminAnlegenComponent, TabComponent, DateToRouterLinkPipe,
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
