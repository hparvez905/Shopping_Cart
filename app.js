
function updateProductNumber(product,price,IsIncrease,) {
    const productinput= document.getElementById( product+ '-number');
    let productNumber= productinput.value ;
    if (IsIncrease) {
        productNumber = parseFloat(productNumber)  + 1;
        
    }
    else if (productNumber > 0) 
    {
        productNumber= parseFloat(productNumber)  - 1;
    }
    // store value 
    productinput.value=productNumber;
        // update  price 

    const productTotal =document.getElementById(product+'-total');
     productTotal.innerText= productNumber * price;
     // calculate total 
    calculateTotal();
   
}
function getInputValue(product) {
    const productinput = document.getElementById(product +'-number');
    const productNumber=parseFloat(productinput.value);
    return  productNumber;

    
}


function calculateTotal() {
    const totalPhonePrice = getInputValue('phone')*1219;
    const totalCasePrice = getInputValue('case')*59;
    const subTotal=parseFloat(totalPhonePrice + totalCasePrice) ;
    const tax=subTotal/10;
    const totalPrice=( subTotal +tax);
    


   document.getElementById('subTotal').innerText=subTotal;
   document.getElementById('taxTotal').innerText=tax;
   document.getElementById('totalPrice').innerText=totalPrice;

    
}



// handle phone increase decrease event

document.getElementById('phone-plus').addEventListener('click',function () {
    updateProductNumber('phone',1219,true);

    
    
})
document.getElementById('phone-minus').addEventListener('click',function () {
    updateProductNumber('phone',1219,false);
   
    
})

// handle case increase decrease event 

document.getElementById('case-plus').addEventListener('click',function(){

    updateProductNumber('case',59,true);



})
document.getElementById('case-minus').addEventListener('click',function(){

    updateProductNumber('case',59,false);
})