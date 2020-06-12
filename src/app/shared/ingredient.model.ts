export class Ingredient {
    public name : string;
    public quantity : number;
    public measure : string;
    public checked : boolean;

    constructor(name : string, quantity : number, measure : string, checked : boolean) {
        this.name = name;
        this.quantity = quantity;
        this.measure = measure;
        this.checked = checked;
    }
}