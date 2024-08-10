import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipe: any;

  constructor(private authService : AuthService) {}
  
  ngOnInit() {
    this.fetchRecipe();
  }

  fetchRecipe() {
    this.authService.getRandomRecipe().subscribe(
      (data) => {
        console.log(data);
        this.recipe = data.meals[0]; // Accede al primer objeto de la respuesta
      },
      (error) => {
        console.error('Error fetching recipe:', error);
      }
    );
  }

  getIngredients(): string[] {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.recipe[`strIngredient${i}`];
      const measure = this.recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? measure + ' ' : ''}${ingredient}`);
      }
    }
    return ingredients;
  }
}
