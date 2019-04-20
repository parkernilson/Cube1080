import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * The http error service is in charge of handling errors thrown
 * by http requests made by the other http services
 */
export class HttpErrorService {

	constructor() { }

	/**
	 * Handle Http operation that failed.
	 * Let the app continue
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	public handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			//log error
			console.log(`${operation} failed: ${error.message}`);

			//let the app keep running by returning an empty result.
			return of(result as T);
		}
	}

}
