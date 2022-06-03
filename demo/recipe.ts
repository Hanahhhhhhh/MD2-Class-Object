export class Recipe {
    title: string;
    servings: number;
    ingredients : string;
    constructor(title: string,
    servings: number,
    ingredients : string) {
        this.title =title;
        this.servings =servings;
        this.ingredients =ingredients
    }
}