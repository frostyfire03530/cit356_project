self.onmessage = function(e) {
	var data = e.data;
	/*switch (data) {
		case 'fetchJSON':*/
			var getRequest = new XMLHttpRequest();
			var products = "";
			getRequest.open("POST", "/json/products.json", true);
			getRequest.setRequestHeader("Content-type","application/json");
	  
			getRequest.onreadystatechange=function(){
				if (getRequest.readyState == 4 && getRequest.status == 200){
					products = getRequest.responseText;
					postMessage(products);
				}
				else if (getRequest.readyState == 4){
					products = "An error has occured making the request";
					postMessage(products);
			}
	  
				
			};
		
		//break;
		getRequest.send();
		//default:
		//self.postMessage('Unknown command: ' + data.msg);
	//}
};