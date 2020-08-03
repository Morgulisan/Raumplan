import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TagesansichtComponent} from "./tagesansicht/tagesansicht.component";
import {RaumansichtComponent} from "./raumansicht/raumansicht.component";
import {TerminAnlegenComponent} from "./termin-anlegen/termin-anlegen.component";
import {TabComponent} from "./tab/tab.component";
import {TodayGuard} from "./today.guard";

const ROOT_ROUTES: Routes = [
  {
    path: ':year/:month/:day',
    component: TabComponent,
    children: [
      {
        path: 'overview',
        component: TagesansichtComponent
      },
      {
        path: 'details',
        component: RaumansichtComponent
      },
      {
        path: 'create',
        component: TerminAnlegenComponent
      },
      {
        path: '**',
        redirectTo: 'overview'
      }
    ]
  },
  {
    canActivate: [TodayGuard],
    path: '**',
    component: TabComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROOT_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
