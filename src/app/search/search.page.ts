import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa Router
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchTerm: string = '';
  ingredients: any[] = [];
  selectedIngredients: any[] = [];
  recipes: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchIngredients();
  }

  fetchIngredients() {
    const url = `${environment.APIs.mealDb}list.php?i=list`;

    this.http.get<any>(url).subscribe(data => {
      console.log('Datos de la API:', data);
      
      if (data && data.ingredients && Array.isArray(data.ingredients)) {
        this.ingredients = data.ingredients.map((i: any) => ({
          name: i.strIngredient,
          image: `https://www.themealdb.com/images/ingredients/${i.strIngredient.replace(/ /g, '_')}.png`
        }));
      } else {
        console.error('No se encontraron ingredientes en la respuesta de la API.');
      }
    }, error => {
      console.error('Error al obtener ingredientes:', error);
    });
  }

  onSearch() {
    this.searchRecipes();
  }

  selectIngredient(ingredient: any) {
    if (!this.selectedIngredients.find(i => i.name === ingredient.name)) {
      this.selectedIngredients.push(ingredient);
    }
  }

  removeIngredient(ingredient: any) {
    this.selectedIngredients = this.selectedIngredients.filter(i => i.name !== ingredient.name);
  }

  searchRecipes() {
    const ingredientNames = this.selectedIngredients.map(i => i.name).join(',');
    const url = `${environment.APIs.mealDb}filter.php?i=${ingredientNames}`;

    this.http.get<any>(url).subscribe(data => {
      console.log('Datos de recetas:', data);
      this.recipes = data.meals || [];
    }, error => {
      console.error('Error al obtener recetas:', error);
    });
  }

  goHome() {
    this.router.navigate(['/tabs/home']); // Navega a la página de inicio
  }
}
