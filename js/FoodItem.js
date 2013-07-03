function FoodItem(newTitle, newImg, newPrice, newCategory, newBrand, newWeight, newSaleStatus){
	this.title = newTitle;
	this.img = newImg;
	this.price = newPrice;
	this.category = newCategory;
	this.brand = newBrand;
	this.weight = newWeight;
	this.deal = this.price / this.weight;
	this.onSale = newSaleStatus;
}