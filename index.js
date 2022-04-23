
    let container=document.getElementById("container");
    let o=document.getElementById("order");
function order(){
    let array=[];
      var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
      for (var checkbox of markedCheckbox) {
        o.append(checkbox.value + ",");

          array.push(checkbox.value);
      }
 console.log(array.length);
      for(let i=0;i<=array.length-1;i++){
      let mypromise=new Promise(function (resolve,reject){
        let time=Math.random() * 15 * 1000;
        setTimeout(function(){
                resolve(array[i]);
        },time);
        
    });
  
   
    mypromise.then(function(res){
      let div=document.createElement("div");
          let img=document.createElement("img");
          img.style.width="300px";
          img.style.height="300px";
          if(res=="PIZZA")
          {
            img.src="https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826";
          }
          else if(res=="BURGER")
          {
            img.src="https://www.mcdonaldsindia.com/images/products/new/Salsa-Bean-Burger.jpg"
          }
          else if(res=="FRANKY")
          {
            img.src="https://www.mcdonaldsindia.com/images/products/new/Website600x600pix-Mexican-Aloo-Wrap.png"
          }
          else if(res=="ICED_TEA")
          {
            img.src="https://www.mcdonaldsindia.com/images/productview/icedtea.jpg"
          }
          else if(res=="MILKSHAKE")
          {
            img.src="https://www.mcdonaldsindia.com/images/products/new/Chocolate%20Shake.png"
          }else if(res=="SOFT_SERVE")
          {
            img.src="https://www.mcdonaldsindia.com/images/productview/SoftServe(Regular).jpg"
          }
          let p=document.createElement("p");
          p.innerText="Ready..."
          div.append(p,img);
          container.append(div);
    })
      
  }

}

function take(){
  window.location.reload();
}

