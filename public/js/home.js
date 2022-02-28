const productContainer=[...document.querySelectorAll('.product-container')];
const next_btn= document.querySelectorAll('.btn-next');
const prev_btn= document.querySelectorAll('.btn-prev');
console.log(productContainer);


productContainer.forEach((item,i)=>{
    let containerDimension=item.getBoundingClientRect();
    let containerWidth=containerDimension.width;

    next_btn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth;
        console.log("next") ;
       })
    prev_btn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth;
        console.log("prev") ;
    })

})
