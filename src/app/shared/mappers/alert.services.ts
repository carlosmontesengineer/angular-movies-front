import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor() {}

  success(message: string, title: string = 'Éxito') {
    Swal.fire({
      icon: 'success',
      title,
      text: message,
    });
  }

  error(message: string, title: string = 'Error') {
    Swal.fire({
      icon: 'error',
      title,
      text: message,
    });
  }

  warning(message: string, title: string = 'Advertencia') {
    Swal.fire({
      icon: 'warning',
      title,
      text: message,
    });
  }

  confirm(message: string, title: string = '¿Estás seguro?'): Promise<boolean> {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    }).then((result) => result.isConfirmed);
  }
}
