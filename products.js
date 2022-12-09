

let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : 

[
    {
        
        id:1,
        pname:"cat shoe",
        pdescription:"cat sneaker",
        pPrice:"R2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
        count:1
    },

    {
        id:2,
        pname:"cat sneaker",
        pdescription:"jogging sneaker",
        pPrice:"R1710",
        pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
        count:1
    
    
    
     },

      {
        id:3,
        pname:"sneaker",
        pdescription:"formal shoe",
        pPrice:"R1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
        count:1
    
    
    
    },
     {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    },
];



async function diplayprod(){
    products.forEach((products)=> {
        document.querySelector(".container").innerHTML +=
            `<div class="container ">
          <div class="card" >
        <img src="${products.pImage}" class="card-img-top img-thumbnail" style="height: 25rem; width:18rem;" >
        <div class="card-body">
        <h5 class="card-title">${products.pname}</h5>
     <p class="card-text">${products.pPrice}</p>
    <a href="#" class="btn btn-dark">checkout</a>
  </div>
        </div>
      </div>`;
    })
}
diplayprod();




//local storage

let products_serialized = JSON.stringify(products);
console.log(products_serialized );
localStorage.setItem("products",products_serialized);
console.log(localStorage);



//sorting

//by date:works

var byDate = products.slice(0);
byDate.sort(function(a,b) {
    return a.born - b.born;
});
console.log('by date:');
console.log(byDate);

//by name
// var byName = products.slice(0);
// byName.sort(function(a,b) {
//     var x = a.name.toLowerCase();
//     var y = b.name.toLowerCase();
//     return x < y ? -1 : x > y ? 1 : 0;
// });

// console.log('by name:');
// console.log(byName);
























