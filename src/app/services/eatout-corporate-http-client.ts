import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, EMPTY, Observable} from "rxjs";
import {Params} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EatoutCorporateHttpClient {

  constructor(private http: HttpClient) {
  }

  public post<T>(url: string, body: any): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.handleErrors(this.http.post<T>(url, body, httpOptions));
  }

  public get<T>(partialUrl: string, params?: Params): Observable<T> {
    return this.handleErrors(this.http.get<T>(partialUrl, params));
  }

  private handleErrors<T>(call: Observable<T>): Observable<T> {
    return call.pipe(
      catchError((err, caught) => {
        alert('Something went wrong');
        return EMPTY;
      })
    );
  }

}
