const data = localStorage.getItem('items')
const items = JSON.parse(data);

console.log(items);


const div = document.querySelector('.render-phones');

function render(){
    if(items.length > 0){
        div.innerHTML = ''
    for (let i = 0; i < items.length; i++) {
        div.innerHTML+=`<div class="p-5 border border-1  rounded-1 shadow-lg m-2 "> 
        <h3  class="font-bold text-lg text-wrap">
       BRAND: ${items[i].brand}
     </h3>
        <p class="font-bold text-lg text-wrap">
        Camera:  ${items[i].camera}
        </p>
      <h4 class="font-bold text-lg text-wrap">
      Model: ${items[i].model}
      </h4>
      </p>
      <h5 class="font-bold text-lg text-wrap">
      <strong>Price<strong/>:   ${items[i].price}
      </h5> 
      <button onclick="deleteItem(${i})" class="btn btn-primary m-2 btn-lg">Delete</button>
        </div>
        </div>`  
    
    
    }
    }else{
        div.innerHTML = `<img width="100%" src="https://www.success.com/wp-content/uploads/2021/03/success_opengraph_image.png" alt="">`
    }
}
render()

function deleteItem(index){
items.splice(index , 1);
    render()
    localStorage.setItem('items' , items);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
      

}