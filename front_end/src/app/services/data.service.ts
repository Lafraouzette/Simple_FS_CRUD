import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Data } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/data';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl).pipe(
      map(data => {
        if (Array.isArray(data)) {
          return data;
        } else {
          throw new Error('Données reçues invalides');
        }
      }),
      catchError(this.handleError)
    );
  }

  sendData(data: { name: string; value: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  private handleError(error: HttpErrorResponse | Error): Observable<never> {
    let errorMessage = 'Une erreur inconnue est survenue';

    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        errorMessage = 'Impossible de se connecter au serveur';
      } else if (error.status === 404) {
        errorMessage = 'Données introuvables';
      } else {
        errorMessage = `Erreur serveur : ${error.status}`;
      }
    } else {
      errorMessage = error.message;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}