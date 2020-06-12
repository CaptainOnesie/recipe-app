import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  recipe : Recipe;
  constructor(recipe : Recipe) {
    this.recipe = recipe;
   }

  ngOnInit(): void {
  }
}
