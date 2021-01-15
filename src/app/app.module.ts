import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { DailyBookingsViewComponent } from './daily-bookings-view/daily-bookings-view.component';
import { TerminComponent } from './daily-bookings-view/booking/termin.component';
import { BackgroundImageDirectiveModule } from './shared/background-image.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewBookingComponent, NeuerTerminDialogPopComponent } from './shared/new-booking/new-booking.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RoomViewBookingComponent } from './room-view/room-view-booking/room-view-booking.component';
import { FilterRoomsPipe } from './shared/filter-rooms.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { NewBookingViewComponent } from './termin-anlegen/new-booking-view.component';
import {HttpClientModule} from "@angular/common/http";
import {FlexModule} from "@angular/flex-layout";
import {DataSourceCollectionDirectiveModule, DataSourceDirectiveModule} from "@rxap/data-source/directive";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


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
            , HttpClientModule, FlexModule, DataSourceCollectionDirectiveModule, DataSourceDirectiveModule, MatAutocompleteModule
        ],
  providers: [
    MatDatepickerModule
    , MatNativeDateModule
    , MatSnackBar
  ],
  declarations:
  [
    AppComponent
    , RoomViewComponent
    , DailyBookingsViewComponent
    , TerminComponent
    , NewBookingComponent
    , NeuerTerminDialogPopComponent, RoomViewBookingComponent, FilterRoomsPipe, NewBookingViewComponent,
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
