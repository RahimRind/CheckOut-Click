let div =document.querySelector('.div');
const checkout = document.querySelector('#CheckOut');
let arr=[];


const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]
for (let i = 0; i < phones.length; i++) {
   
    // console.log(phones[i]);
    div.innerHTML+=`<div class="p-5 border border-1  rounded-1 shadow-lg m-2 "> 
    <h3  class="font-bold text-lg text-wrap">
   BRAND:  ${phones[i].brand}
 </h3>
 <p class="font-bold text-lg text-wrap">
   Camera:  ${phones[i].camera}
 </p>
 <h4 class="font-bold text-lg text-wrap">
 Model: ${phones[i].model}
 </h4>
 </p>
 <h5 class="font-bold text-lg text-wrap">
 <strong>Price<strong/>:   ${phones[i].price}
 </h5> 
 </div>`  

    
}

function submit(index){
arr.push(phones[index])
console.log(arr);

Swal.fire({ 
title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });

}

checkout.addEventListener('click' , ()=>{
    localStorage.setItem('items' , JSON.stringify(arr));
    window.location = 'CheckOut.html';
    // localStorage.removeItem('items')
})
