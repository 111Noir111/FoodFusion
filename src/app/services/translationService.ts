import { Injectable } from '@angular/core';
import { TranslationServiceClient } from '@google-cloud/translate';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private client = new TranslationServiceClient();

  constructor() { }

  async translateText(text: string): Promise<string> {
    const request = {
      parent: this.client.locationPath('your-project-id', 'global'),
      contents: [text],
      mimeType: 'text/plain',
      sourceLanguageCode: 'en',
      targetLanguageCode: 'es',
    };
  
    try {
      const [response] = await this.client.translateText(request);
      const translatedText = response?.translations?.[0]?.translatedText ?? text;
      return translatedText;
    } catch (error) {
      console.error('Error during translation:', error);
      return text; // Retorna el texto original en caso de error
    }
  }
  
}
