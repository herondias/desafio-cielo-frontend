import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { retry, timeout } from 'rxjs/operators';
import { ExtratoModel } from '../models/extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  private urlEndPoint = environment.URL_EXTRATO;

  constructor(private http$: HttpClient, private httpBack: HttpBackend) { }

  getAll(): Observable<ExtratoModel> {
    return this.http$.get<ExtratoModel>(this.urlEndPoint).pipe(
      timeout(environment.BACKEND_TIMEOUT),
      retry(environment.BACKEND_RETRY_TIMES)
    );
  }
}
