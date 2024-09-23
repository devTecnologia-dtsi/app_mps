import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CambioContrasena, ResponseChangePassword, ResponseLogin, ResponseModules, ResponseSubModule } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UniminutoService {

  constructor(
    private http: HttpClient
  ) { }

  // Solicitud para realizar el login
  loginService(email: String, pass: String) {
    return this.http.post<ResponseLogin>(`${environment.url}/login.php`, { correo: email, pass });
  }

  // Obtener los modulos
  getModules() {
    return this.http.get<ResponseModules>(`${environment.url}/getModules.php`);
  }

  // Obtener los submodulos
  getSubModules(id: string) {
    return this.http.get<ResponseSubModule>(`${environment.url}/getSubModule.php?id=${id}`)
  }

  changePassword(userPass: CambioContrasena) {
    return this.http.post<ResponseChangePassword>(`${environment.url}/createPassword.php`, userPass);
  }

  readFile(url: string) {
    return this.http.get(url, { responseType: 'blob' });
  }
}
