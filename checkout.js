
// // list items

// let listItems = JSON.parse(localStorage.getItem('listIms')) ?
// JSON.parse(localStorage.getItem('#listItems')) :

// [
//     {
        
//         "id":1,
//         pname:"cat shoe",
//         pdescription:"cat sneaker",
//         pPrice:"R2110",
//         pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
//         count:1
//     },

//     {
//         "id":2,
//         pname:"cat sneaker",
//         pdescription:"jogging sneaker",
//         pPrice:"R1710",
//         pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
//         count:1
    
    
    
//      },

//       {
//         "id":3,
//         pname:"sneaker",
//         pdescription:"formal shoe",
//         pPrice:"R1110",
//         pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
//         count:1
    
    
    
//     },
//      {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
    
//     },
//     {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
    
//     },
//     {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
    
//     },
//     {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
    
//     },
//     {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
    
//     },
//     {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
    
//     },
//     {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
//     },
//     {
//         "id":4,
//         pname:"cat shoe",
//         pdescription:"casual shoe",
//         pPrice:"R810",
//         pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
//         count:1
    
    
//     }, 




// ];

//try this code and see if it works 



// $(document).ready(function() {

// 	let products = [{
//             id:1,
// 			productName: "cat boot",
// 			price: "1800.00",
// 			photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg ",

// 		},


//         {
        
//             id:1,
//             productName: "cat boot",
// 			price: "1800.00",
// 			photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg ",
//         },
    


// 		{
// 			productName: "boot",
// 			price: "800.00",
// 			photo: "https://i.postimg.cc/GhVsXqp5/cat1.jpg "
// 		},
// 		{
// 			productName: "nike",
// 			price: "500.00",
// 			photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg  "
// 		},
// 		{
// 			productName: "XP 1155 Intel Core Laptop",
// 			price: "1000.00",
// 			photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg"
// 		}
    
//     ];
// 	showProducts(products);
// });


// function showProducts(productItem) {
	
//     document.querySelector("#product-item-container").innerHTML +=
//             `<div class="container ">
//           <div class="card" >
//         <img src="${products.photo}" class="card-img-top img-thumbnail" style="height: 25rem; width:18rem;" >
//         <div class="card-body">
//         <h5 class="card-title">${productItem.productname}</h5>
//      <p class="card-text">${productItem.price}</p>
//     <a href="#" class="btn btn-dark">checkout</a>
//   </div>
//         </div>
//       </div>`
//     }
    
// 	// var productHTML = "";
// 	// product.forEach(function(item) {
// 	// 	productHTML += '<div class="product-item-container">'+
// 	// 				'<img src=" item.photo ">'+
// 	// 				'<div class="productname">' + item.productName + '</div>'+
// 	// 				'<div class="price">$<span>' + item.price + '</span></div>'+
// 	// 				'<div class="cart-action">'+
// 	// 					'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
// 	// 					'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
// 	// 				'</div>'+
// 	// 			'</div>';
// 	// 			"<tr>";
		
// 	// });
// 	 $('#product-item-container').html(productHTML);
// }




// function addToCart(element) {
// 	var productParent = $(element).closest('div.product-item');

// 	var price = $(productParent).find('.price span').text();
// 	var productName = $(productParent).find('.productname').text();
// 	var quantity = $(productParent).find('.product-quantity').val();

// 	var cartItem = {
// 		productName: productName,
// 		price: price,
// 		quantity: quantity
// 	};
// 	var cartItemJSON = JSON.stringify(cartItem);

// 	var cartArray = new Array();
// 	// If javascript shopping cart session is not empty
// 	if (sessionStorage.getItem('shopping-cart')) {
// 		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
// 	}
// 	cartArray.push(cartItemJSON);

// 	var cartJSON = JSON.stringify(cartArray);
// 	sessionStorage.setItem('shopping-cart', cartJSON);
// 	showCartTable();
// }


// //////////////////////////////

// function emptyCart() {
// 	if (sessionStorage.getItem('shopping-cart')) {
// 		// Clear JavaScript sessionStorage by index
// 		sessionStorage.removeItem('shopping-cart');
// 		showCartTable();
// 	}
// }

// function showCartTable() {
// 	var cartRowHTML = "";
// 	var itemCount = 0;
// 	var grandTotal = 0;

// 	var price = 0;
// 	var quantity = 0;
// 	var subTotal = 0;

// 	if (sessionStorage.getItem('shopping-cart')) {
// 		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
// 		itemCount = shoppingCart.length;

// 		//Iterate javascript shopping cart array
// 		shoppingCart.forEach(function(item) {
// 			var cartItem = JSON.parse(item);
// 			price = parseFloat(cartItem.price);
// 			quantity = parseInt(cartItem.quantity);
// 			subTotal = price * quantity

// 			cartRowHTML += "<tr>" +
// 				"<td>" + cartItem.productName + "</td>" +
// 				"<td class='text-right'>$" + price.toFixed(2) + "</td>" +
// 				"<td class='text-right'>" + quantity + "</td>" +
// 				"<td class='text-right'>$" + subTotal.toFixed(2) + "</td>" +
// 				"</tr>";

// 			grandTotal += subTotal;
// 		});
// 	}

// 	$('#cartTableBody').html(cartRowHTML);
// 	$('#itemCount').text(itemCount);
// 	$('#totalAmount').text("$" + grandTotal.toFixed(2));
// }





// //cart localstorage
// $(document).ready(function() {
// 	var productItem = [{
//         id:1,
//         productName: "cat boot",
//         price: "1800.00",
//         photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg ",

//     },
//     {
    
//         id:1,
//         productName: "cat boot",
//         price: "1800.00",
//         photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg ",
//     },
//     {
//         productName: "boot",
//         price: "800.00",
//         photo: "https://i.postimg.cc/GhVsXqp5/cat1.jpg "
//     },
//     {
//         productName: "nike",
//         price: "500.00",
//         photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg  "
//     },
//     {
//         productName: "XP 1155 Intel Core Laptop",
//         price: "1000.00",
//         photo: " https://i.postimg.cc/GhVsXqp5/cat1.jpg"
//     }];
// 	showProductGallery(productItem);
// 	showCartTable();
// });

// function addToCart(element) {
// 	var productParent = $(element).closest('div.product-item');

// 	var price = $(productParent).find('.price span').text();
// 	var productName = $(productParent).find('.productname').text();
// 	var quantity = $(productParent).find('.product-quantity').val();

// 	var cartItem = {
// 		productName: productName,
// 		price: price,
// 		quantity: quantity
// 	};
// 	var cartItemJSON = JSON.stringify(cartItem);

// 	var cartArray = new Array();
// 	// If javascript shopping cart session is not empty
// 	if (localStorage.getItem('shopping-cart')) {
// 		cartArray = JSON.parse(localStorage.getItem('shopping-cart'));
// 	}
// 	cartArray.push(cartItemJSON);

// 	var cartJSON = JSON.stringify(cartArray);
// 	localStorage.setItem('shopping-cart', cartJSON);
// 	showCartTable();
// }

// function emptyCart() {
// 	if (localStorage.getItem('shopping-cart')) {
// 		// Clear JavaScript localStorage by index
// 		localStorage.removeItem('shopping-cart');
// 		showCartTable();
// 	}
// }

// function removeCartItem(index) {
// 	if (localStorage.getItem('shopping-cart')) {
// 		var shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
// 		localStorage.removeItem(shoppingCart[index]);
// 		showCartTable();
// 	}
// }

// function showCartTable() {
// 	var cartRowHTML = "";
// 	var itemCount = 0;
// 	var grandTotal = 0;

// 	var price = 0;
// 	var quantity = 0;
// 	var subTotal = 0;

// 	if (localStorage.getItem('shopping-cart')) {
// 		var shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
// 		itemCount = shoppingCart.length;

// 		//Iterate javascript shopping cart array
// 		shoppingCart.forEach(function(item) {
// 			var cartItem = JSON.parse(item);
// 			price = parseFloat(cartItem.price);
// 			quantity = parseInt(cartItem.quantity);
// 			subTotal = price * quantity

// 			cartRowHTML += "<tr>" +
// 				"<td>" + cartItem.productName + "</td>" +
// 				"<td class='text-right'>$" + price.toFixed(2) + "</td>" +
// 				"<td class='text-right'>" + quantity + "</td>" +
// 				"<td class='text-right'>$" + subTotal.toFixed(2) + "</td>" +
// 				"</tr>";

// 			grandTotal += subTotal;
// 		});
// 	}

// 	$('#cartTableBody').html(cartRowHTML);
// 	$('#itemCount').text(itemCount);
// 	$('#totalAmount').text("$" + grandTotal.toFixed(2));
// }


// function showProductGallery(product) {
// 	//Iterate javascript shopping cart array
// 	var productHTML = "";
// 	product.forEach(function(item) {
// 		productHTML += '<div class="product-item">'+
// 					'<img src="product-images/' + item.photo + '">'+
// 					'<div class="productname">' + item.productName + '</div>'+
// 					'<div class="price">$<span>' + item.price + '</span></div>'+
// 					'<div class="cart-action">'+
// 						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
// 						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
// 					'</div>'+
// 				'</div>';
// 				"<tr>";
		
// 	});
// 	$('#product-item-container').html(productHTML);
// }