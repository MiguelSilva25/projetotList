import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'projetoUninter';
  data: Array<any>;constructor(){
    this.data = [
      {Name: 'MIGUEL MAGALHÃES DA SILVA', RU: ' 3576177', CURSOS: ' Data Science', DNS: '25.01.1999'},
      {Name: 'MAGALHÃES', RU: ' 1234567', CURSOS: ' Artificial Intelligence', DNS: '23.12.1997'},
      {Name: 'SILVA', RU: ' 7654321', CURSOS: ' Machine Learning', DNS: '25.01.1999'},
      {Name: 'MARQUES', RU: ' 3576178', CURSOS: ' Deep Learning', DNS: '25.01.1972'},
      {Name: 'PAIVA', RU: ' 3576155', CURSOS: ' Internet of Things (IoT)', DNS: '25.01.1974'}
    ];

  }
}
