import { Injectable } from '@angular/core';
import { technologie } from '../models/technologie';
@Injectable({
  providedIn: 'root',
})
export class TechnologiesServiceService {
  public Technologies: technologie[];
  constructor() {
    this.Technologies = [
      new technologie(
        1,
        'HTML5',
        '../../../assets/img/html5.png',
        'https://lenguajehtml.com/html/'
      ),
      new technologie(
        2,
        'CSS',
        '../../../assets/img/CSS.jpg',
        'https://lenguajecss.com/css/introduccion/que-es-css/'
      ),
      new technologie(
        3,
        'Bootstrap',
        '../../../assets/img/Bootstrap.png',
        'https://getbootstrap.com/'
      ),
      new technologie(
        4,
        'Wordpress',
        '../../../assets/img/WordPress.png',
        'https://wordpress.com/es/'
      ),
      new technologie(
        5,
        'JavaScript',
        '../../../assets/img/JS.png',
        'https://developer.mozilla.org/es/docs/Web/JavaScript'
      ),
      new technologie(
        6,
        'TypeScript',
        '../../../assets/img/Typescript.png',
        'https://www.typescriptlang.org/'
      ),
      new technologie(
        7,
        'Angular.js',
        '../../../assets/img/Angular.png',
        'https://angular.io/'
      ),
      new technologie(
        8,
        'React.js',
        '../../assets/img/React.png',
        'https://es.react.dev',

      ),
      new technologie(
        9,
        'Node.js',
        '../../../assets/img/Node.png',
        'https://nodejs.org/en/about/'
      ),
      new technologie(
        10,
        'MySQL',
        '../../../assets/img/SQL.png',
        'https://www.mysql.com/'
      ),
      new technologie(
        11,
        'PHP',
        '../../../assets/img/PHP.png',
        'https://www.php.net/manual/es/intro-whatis.php'
      ),
      new technologie(
        12,
        'Laravel',
        '../../assets/img/laravel.png',
        'https://laravel.com',

      ),
      new technologie(
        13,
        'C++',
        '../../assets/img/c++.png',
        'https://es.wikipedia.org/wiki/C%2B%2B',

      ),
      new technologie(
        14,
        'Python',
        '../../assets/img/Python.png',
        'https://www.python.org',

      ),
      new technologie(
        15,
        'Java',
        '../../assets/img/Java.png',
        'https://www.java.com/es/',

      ),

    ];
  }
  getTechnologie() {
    return this.Technologies;
  }
}
