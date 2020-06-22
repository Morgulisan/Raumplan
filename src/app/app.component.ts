import { Component} from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  name = 'Raumplan';
  datastruct = { Rooms: [
    {
      name: 'Dom',
      img: 'https://www.unesco.de/sites/default/files/styles/1280w/public/2018-01/13488586593_Spectating%20The%20Monks_c_Ingo_Attribution%202.0%20Generic%20%28CC%20BY%202.0%29_0.jpg'
    },
    {
      name: 'Theater',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Aachen_Theatre.jpg/920px-Aachen_Theatre.jpg'
    },
    {
      name: 'Campus',
      img: 'https://www.sbp.de/fileadmin/sbp.de/projects/99BCD308995BD54FC1257E7500365EC1_0_1_2169_1281_b_MAX.jpg'
    },
    {
      name: 'Elisenbrunnen',
      img: 'https://img.fotocommunity.com/elisenbrunnen-aachen-6d5b09a6-ff54-4d70-89df-c6fc1ebc8460.jpg?height=720'
    },
    {
      name: 'Tivoli',
      img: 'https://www.alemannia-aachen.de/cache/DSC_4282-jpg-e783db59d3ff78427521b75a4b27ab3c.jpeg'
    }
  ],
  Dates: [
    {dateDay : {Y: 2020, M: 4, D: 6}, dateTime: 7.5 , dateDuration: 4, Room: 'Dom', owner: '775726', name: 'S1'},
    {dateDay : {Y: 2020, M: 4, D: 6}, dateTime: 9.5 , dateDuration: 6, Room: 'Dom', owner: '775726', name: 'S2'},
    {dateDay : {Y: 2020, M: 4, D: 6}, dateTime: 17.5 , dateDuration: 2, Room: 'Dom', owner: '775726', name: 'WG'},
    {dateDay : {Y: 2020, M: 4, D: 6}, dateTime: 9 , dateDuration: 4, Room: 'Theater', owner: '775726', name: 'S1'},
    {dateDay : {Y: 2020, M: 4, D: 6}, dateTime: 10 , dateDuration: 4, Room: 'Elisenbrunnen', owner: '775726', name: 'S2'},
    {dateDay : {Y: 2020, M: 4, D: 6}, dateTime: 12.5 , dateDuration: 4, Room: 'Tivoli', owner: '775726', name: 'WG'}
    ],
  Partecipants: [
    {
      number : '775726',
      name: 'Malte Kretzschmar'
    },
    {
      number : '774992',
      name: 'Fynn Kretzschmar'
    },
    {
      number : '773658',
      name: 'Adrian Habersetzer'
    },
    ]
};

title: 'raumplan';


}
