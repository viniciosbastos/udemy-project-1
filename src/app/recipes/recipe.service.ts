import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Pie', 'Lemon Pie', 'http://assets.kraftfoods.com/recipe_images/opendeploy/73956_640x428.jpg', [
      new Ingredient('Lemom', 4),
      new Ingredient('Milk', 1),
    ]),
    new Recipe('Toast', 'Toast', 'http://chicago-toast.com/img/big-toast-img.png', [
      new Ingredient('Bread', 2),
      new Ingredient('Butter', 1),
    ])
  ];
  
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}
