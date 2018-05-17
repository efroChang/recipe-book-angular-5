import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe-detail/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {

    // Listen to the Event from Service
    this.recipeService.recipeSelected.subscribe(
      ( recipe: Recipe ) => {
        this.selectedRecipe = recipe;
      }
    )
  }
}
