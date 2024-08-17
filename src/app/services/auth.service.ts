import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlRandom = `${environment.APIs.mealDb}random.php`;
  private apiUrlPopular = `${environment.APIs.mealDb}search.php?s=`; // Cambia a la URL correcta si existe

  constructor(private http: HttpClient) {}

  getRandomRecipe(): Observable<any> {
    return this.http.get<any>(this.apiUrlRandom);
  }

  getRecommendedRecipes(): Observable<any> {
    return this.http.get<any>(this.apiUrlPopular); // Usa el endpoint correcto
  }
}
