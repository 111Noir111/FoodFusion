import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  recipe: any;
  recommendedRecipes: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.fetchRecipe();
    this.fetchRecommendedRecipes();
  }

  onSearch(event: CustomEvent) {
    const searchTerm = event.detail.value;
    this.router.navigate(['/search'], { queryParams: { query: searchTerm } });
  }

  fetchRecipe() {
    this.authService.getRandomRecipe().subscribe(
      (data) => {
        this.recipe = data.meals[0];
      },
      (error) => {
        console.error('Error fetching recipe:', error);
      }
    );
  }

  fetchRecommendedRecipes() {
    this.authService.getRecommendedRecipes().subscribe(
      (data) => {
        console.log('Datos de recetas recomendadas:', data);
        if (data && data.meals) {
          this.recommendedRecipes = data.meals;
        } else {
          console.warn('No se encontraron recetas recomendadas.');
        }
      },
      (error) => {
        console.error('Error fetching recommended recipes:', error);
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
