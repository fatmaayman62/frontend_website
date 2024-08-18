
            //to hidden input of search when click anywhere or make scroll  in navbar
            //start
            let btn_search=document.getElementById('btn_search');
            let hidden_search=document.getElementById("input_search");
            let z=0;
            btn_search.addEventListener("click",function(event){
                z++;
                if(z==1){
                    hidden_search.style.display='block';
                    event.stopPropagation();
                }else{
                    z=0;
                    hidden_search.style.display='none';
                } 
            });
            document.addEventListener("click",function(){
                hidden_search.style.display='none';
            });
            window.addEventListener("scroll",function(){
                hidden_search.style.display='none';
            });
            hidden_search.addEventListener('click',function(even){
                even.stopPropagation();
            });
            //end

            /////////////////////////////////////////////////////////////////////////

            //in page coffe products we will icon prev and next to show products 
            //start
            let products_content=document.getElementById('products_content');
            let btn_next=document.querySelector('.next');
            let btn_prev=document.querySelector('.prev');
            btn_next.addEventListener('click',()=>{
                products_content.scrollLeft +=250;
            });
            btn_prev.addEventListener('click',()=>{
                products_content.scrollLeft -=250;
            });
            //end
             //in page coffe products we will icon prev and next to show products 
            //start
            let products_content_bekary=document.getElementById('products_content_bekary');
            let btn_next_bekary=document.querySelector('.next_bekary');
            let btn_prev_bekary=document.querySelector('.prev_bekary');
            btn_next_bekary.addEventListener('click',()=>{
                products_content_bekary.scrollLeft +=250;
            });
            btn_prev_bekary.addEventListener('click',()=>{
                products_content_bekary.scrollLeft -=250;
            });
            //end

            ////////////////////////////////////////////////////////////////////////////////

            //in page review to make reviews contacts with circle 
            //start
            function conectItemWithDot(x){
                let box=document.querySelectorAll('.item');
                let dots=document.querySelectorAll('.dot');
                box.forEach(function(slide,index){
                    slide.classList.remove('active');
                    dots[index].classList.remove('active');

                });
                box[x-1].classList.add('active');
                dots[x-1].classList.add('active');
            }
            //end

            //////////////////////////////////////////////////////////////////////////

            //to make product added to shopping list
            //start
    
            document.addEventListener('DOMContentLoaded', function() {

                let products = document.querySelectorAll('.box');
                let play_list = document.getElementById('list');
            
                products.forEach(function(product) {
                    let btn = product.querySelector('button');
                    
                    btn.addEventListener('click', function() {
                        let productID = product.getAttribute('data-id'); 
                        let productPrice=product.getAttribute('data-price'); 
                       
                        let total_price=document.getElementById('display_price');

                        let existingProduct = play_list.querySelector(`[data-id="${productID}"]`);
            
                        if (existingProduct) {
                            
                            let counter = existingProduct.querySelector('.counter');
                            counter.textContent = parseInt(counter.textContent) + 1;

                            total_price.textContent=parseFloat(total_price.textContent) + parseFloat(`${productPrice}`);
                        } else {
                            
                            let productContent = product.cloneNode(true);
                            let btn_delete = productContent.querySelectorAll('#btn_delete');
            
                            btn_delete.forEach(function(el) {
                                el.parentNode.removeChild(el);
                            });
            
                            if(total_price.textContent == ''){
                            total_price.textContent=parseFloat(`${productPrice}`);
                            }else{
                            total_price.textContent=parseFloat(total_price.textContent) + parseFloat(`${productPrice}`);
                            }

                            let counter = document.createElement('span');
                            counter.id='counter';
                            //css
                            counter.style.padding="0 4px";
                            counter.style.border="solid 1px black"
                            counter.style.margin="0 5px"
                            counter.style.background="white";
                            counter.className = 'counter';
 
                            counter.textContent = 1;
                            productContent.querySelector('.btn').appendChild(counter);
                       
                         
                       

                            play_list.appendChild(productContent);
                        }
                    });
                });
            });
            //end

            ///////////////////////////////////////////////////////////////////////

            //to make btn of x remove product from shopping list
            //start
            function remove_box(product){
                var play_list=document.getElementById('list');
                var listItem =product.parentElement;
                play_list.removeChild(listItem);

                let productPrice=listItem.getAttribute('data-price');  
                let total_price=document.getElementById('display_price');
                let counter = listItem.querySelector('#counter');

                total_price.textContent=parseFloat(total_price.textContent) - `${parseFloat(`${productPrice}`) * parseInt(counter.textContent)}`;
                

            }
            //end

            ////////////////////////////////////////////////////////////////////////

            //display total price inside shopping list
            //start
            var x=0;
            function fun_to_display_Totalprice(){
                let data=document.getElementById('box_of_price');
                x++;
                if(x == 1){
                    data.style.display='flex';
                }
                else{
                    x=0;
                    data.style.display='none';
                }
            }
            //end


