export default class Product {
    name;
    price;
    category;
    description;
    imageUrl;

    constructor(name, price, category, description, imageUrl) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    getProductImage() {
        return this.imageUrl;
    }

    setProductImage(newImageUrl) {
        this.imageUrl = newImageUrl;
    }

    getProductName() {
        return this.name;
    }

    setProductName(newName) {
        this.name = newName;
    }

    getProductPrice() {
        return this.price;
    }

    setProductPrice(newPrice) {
        this.price = newPrice;
    }

    getProductCategory() {
        return this.category;
    }

    setProductCategory(newCategory) {
        this.category = newCategory;
    }

    getProductDescription() {
        return this.description;
    }

    setProductDescription(newDescription) {
        return this.description = newDescription;
    }
}