

// use this
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



// async function tableshow(){
//     products.forEach((products)=> {
//         document.querySelector(".container").innerHTML +=
//             `<div class="container ">
//           <div class="card" >
//         <img src="${products.pImage}" class="card-img-top img-thumbnail" style="height: 25rem; width:18rem;" >
//         <div class="card-body">
//         <h5 class="card-title">${products.pname}</h5>
//      <p class="card-text">${products.pPrice}</p>
//     <a href="#" class="btn btn-dark">checkout</a>
//   </div>
//         </div>
//       </div>`;
//     })
// }
// tableshow();



//local storage

let products_serialized = JSON.stringify(products);
console.log(products_serialized );
localStorage.setItem("products",products_serialized);
console.log(localStorage);



var mainObj = [
    {
        
        id:1,
        pname:"cat shoe",
        pdescription:"cat sneaker",
        pPrice:"2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
        count:1
    },

    {
        id:2,
        pname:"cat sneaker",
        pdescription:"jogging sneaker",
        pPrice:"1710",
        pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
        count:1
    
    
    
     },

      {
        id:3,
        pname:"sneaker",
        pdescription:"formal shoe",
        pPrice:"1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
        count:1
    
    
    
    },
     {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"810",
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
        pPrice:"810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:810,
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    },
];
// var k = '<tbody>'
// for(i = 0;i < products.length; i++){
//     k+= '<tr>';
//     k+= '<td>' + products[i].id + '</td>';
//     k+= '<td>' + products[i].pname+ '</td>';
//     k+= '<td>' + products[i].pPrice + '</td>';
//     k+= '<td>' + products[i].pdescription + '</td>';
   
//     k+= '</tr>';
// }
// k+='</tbody>';

for(i = 0;i < products.length; i++){
    document.getElementById('tableData').innerHTML +=
        `<tr>
            <td>  ${products[i].id} </td>;
            <td>  ${products[i].pname} </td>;
            <td> ${products[i].pPrice} </td>;
            <td> ${products[i].pdescription} </td>;
       
        </tr>`
    }
document.getElementById('tableData').innerHTML = k;


























