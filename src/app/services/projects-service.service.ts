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
        'Era un emprendimiento de venta de muebles de aluminio anodizado; el front-end está hecho en Angular.js.',
        'https://rivera-designs.com',
        'https://github.com/vceniceros/rivera-designs--current-page-'
      ),
      new project(
        'Fundacion TekoPora',
        '../../../assets/img/fundacion-teko-pora.jpg',
        'La Fundación "Teko Pora Andrésito" es una ONG sin fines de lucro cuyo propósito es ayudar a las comunidades nativas del noreste del país. El frontend está hecho en Angular.js y el backend en PHP, cuenta con un panel de administración con inicio de sesión y contraseña.',
        'https://fundacion-teko-pora.org',
        'https://github.com/vceniceros/teko-pora-upgrade.git'
      ),
      new project(
        'GCM Baires',
        '../../../assets/img/GCMbaires.png',
        'GCMBaires es un broker de seguros de la zona norte. La PYME siempre tuvo presencia digital hasta que el desarrollador del sitio se fue a trabajar en el extranjero. Actualmente, soy el encargado de las actualizaciones, mantenimiento y mejoras de la página.',
        'https://gcmbaires.com',
        ''
      ),
    ];
  }
  getProject() {
    return this.Projects;
  }
}
