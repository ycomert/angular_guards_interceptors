import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    // Token'ı console'a loglayarak kontrol edelim
    console.log("Token in Interceptor:", token);

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });

      // Yeni istek başlıklarını loglayarak kontrol edelim
      console.log("Yeni İstek Başlıkları:", cloned.headers);

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
