import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private url = '/api/v2/translate'; // URL de la API de DeepL

  constructor(private http: HttpClient) { }

  translateText(text: string, targetLang: string, sourceLang: string = 'EN'): Promise<string> {
    const headers = new HttpHeaders({
      'Authorization': 'DeepL-Auth-Key 8f92eac2-6558-4e02-a750-d4a4b258c6ba:fx',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams({
      text: text,
      target_lang: targetLang,
    }).toString();

    return this.http.post<any>(this.url, body, { headers: headers, responseType: 'json' as 'json' }).toPromise()
    .then(response => {
      // Asegúrate de que la clave 'translations' esté en la respuesta
      if (response && response.translations && response.translations.length > 0) {
        return response.translations[0].text;
      } else {
        throw new Error('Invalid response from translation API');
      }
    })
    .catch(error => {
      console.error('Error translating text:', error);
      throw error; // Re-lanzar el error para manejarlo en el componente
    });
  }
}
