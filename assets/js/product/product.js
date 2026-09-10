export default class Product {
    name;
    price;
    categories;
    description;
    imageUrl;

    constructor(name, price, categories, description, imageUrl) {
        this.name = name;
        this.price = price;
        this.categories = categories;
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

    getProductCategories() {
        return this.categories;
    }

    setProductCategories(newCategories) {
        this.categories = newCategories;
    }

    getProductDescription() {
        return this.description;
    }

    setProductDescription(newDescription) {
        return this.description = newDescription;
    }
}