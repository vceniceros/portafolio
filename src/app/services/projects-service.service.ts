import { Injectable } from '@angular/core';
import { project } from '../models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceService {
  public Projects: project[];
  constructor() {
    this.Projects = [
      new project(
        'Rivera Desigs',
        '../../../assets/img/rivera-designs.jpg',
        'Es un emprendimiento de venta de muebles de aluminio anodizado, el front-end esta hecho en Angular.js y el backend utiliza PHPMailer para la recepcion de consultas, mas adelante planea convertirse en un Ecommerce.',
        'https://rivera-designs.com',
        'https://github.com/vceniceros/Rivera-designs-2.5.git'
      ),
      new project(
        'Fundacion TekoPora',
        '../../../assets/img/fundacion-teko-pora.jpg',
        'La fundacion "Teko Pora" es una ONG sin fines de lucro cuyo proposito es ayudar a las comunidades nativas del noreste del pais, la pagina esta hecha en wordpress y utiliza la api de Mercado libre para recibir donaciones.',
        'https://fundacion-teko-pora.org',
        'https://github.com/vceniceros/teko-pora-upgrade.git'
      ),
      new project(
        'GCM Baires',
        '../../../assets/img/GCMbaires.png',
        'GCMbaires es un broker de seguros de zona norte, la PYME siempre tuvo presencia digital hasta que el desarrollador del sitio se fue a trabajar en el extranjero, actualmente soy el encargado de las actualizaciones, mantenimiento y mejoras de la pagina.',
        'https://gcmbaires.com',
        ''
      ),
    ];
  }
  getProject() {
    return this.Projects;
  }
}
