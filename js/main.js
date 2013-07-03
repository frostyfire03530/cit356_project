
var jsonProducts = localStorage.getItem('jsonProducts');
var jsonProductsTimeStamp = localStorage.getItem('jsonProductsTimeStamp');
var firstRun = localStorage.getItem('firstRun');
window.alert(jsonProductsTimeStamp);
var currentTimeStamp = new Date().getTime();
var timeStampDifference = currentTimeStamp - jsonProductsTimeStamp;


if (timeStampDifference > 60000 ){
	localStorage.setItem('firstRun',true);
	getJsonProducts();
	
}
if (!jsonProductsTimeStamp){
	localStorage.setItem('firstRun',true);
	getJsonProducts();
}
if (jsonProducts && !firstRun){
	unloadJsonProducts();
}

if (firstRun){
	localStorage.setItem('firstRun',false);
}



function unloadJsonProducts(){
	window.alert(jsonProducts);
	var jsonProductsObject = JSON.parse(jsonProducts);
	for(var i = 0; i < jsonProductsObject.products.length; i++){
		var title = jsonProductsObject.products[i].title;
		var description = jsonProductsObject.products[i].description;
		var img = jsonProductsObject.products[i].img;
		var price = jsonProductsObject.products[i].price;
		var category = jsonProductsObject.products[i].category;
		var subtitle = jsonProductsObject.products[i].subtitle;
		var brand = jsonProductsObject.products[i].brand;
		var amount = jsonProductsObject.products[i].amount;
		var unit = jsonProductsObject.products[i].unit;
		var deal = jsonProductsObject.products[i].deal;
		var onSale = jsonProductsObject.products[i].onSale;
		var store = jsonProductsObject.products[i].store;
		
		output =	title+"\n"+
					description+"\n"+
					img+"\n"+
					price+"\n"+
					category+"\n"+
					subtitle+"\n"+
					brand+"\n"+
					amount+"\n"+
					unit+"\n"+
					deal+"\n"+
					onSale+"\n"+
					store;
	}
}

function getJsonProducts(){
	var getJSON = new Worker('/js/getJSON.js?version=1');		
	getJSON.onmessage = function(e) {
		jsonProducts = e.data;
		if (jsonProducts){
			localStorage.setItem('jsonProducts',jsonProducts);
			var jsonProductsTimeStamp = new Date().getTime();
			localStorage.setItem('jsonProductsTimeStamp',jsonProductsTimeStamp);
			unloadJsonProducts();
		}
		else{
			window.alert("Failed, try back again later.");
		}
	}	
	getJSON.postMessage();
	
}

