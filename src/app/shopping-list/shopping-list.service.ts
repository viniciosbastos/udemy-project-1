import { Ingredient } from '../recipes/ingredient';

export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems(): Ingredient[] {
    return this.items;
  }  

  addItems(items: Ingredient[]): void {
    Array.prototype.push.apply(this.items, items);
  }
}
