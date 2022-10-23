





let selling_price = Number(prompt("enter selling price"))
let purchase_price = Number(prompt("enter purchase price"))
let profit_loss = selling_price - purchase_price;

if( profit_loss > 0){

  let per = (profit_loss/purchase_price)*100;
  document.write("profit" + per);


}
else{
       let per = (profit_loss/purchase_price)*-100;
       document.write("loss"+ per)  

}



