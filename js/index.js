'use strict';

let styleDiv                        = document.querySelector('style');

let appDiv                          = document.getElementById('app');

let honeyDiv                        = document.getElementById('honeyDiv');

let arganDiv                        = document.getElementById('arganDiv');

let arganBeautyDiv                  = document.getElementById('arganBeautyDiv');

let amlouDiv                        = document.getElementById('amlouDiv');

let zafaranDiv                      = document.getElementById('zafaranDiv');

let baqatDiv                        = document.getElementById('baqatDiv');

let orodDiv                         = document.getElementById('3orodDiv');

let layerDiv                        = document.getElementById('layer');

let product_selled_config_Div       = document.getElementById('product_selled_config');

let sellDiv                         = document.getElementById('sellDiv');

let infoDiv                         = document.getElementById('infoDiv');

let input_product_nums              = document.getElementById('input_product_nums');

let total_selected_product_price    = document.getElementById('total_selected_product_price');

let selled_products_arr = [];

// START MAIN VARS

let navDiv = document.querySelector('.nav');

var li_a = document.querySelectorAll('li a');

var langDiv = document.querySelector('#lang');

let headerDiv = document.querySelector('.header');

let selectedCards = document.querySelectorAll('.card.selected');

let products_selled_arr = [];

let honey_1000g_products = [

    product_01,
    product_03,
    product_05,
    product_07,
    product_09,
    product_11,
    product_13,
    product_15
];

let honey_500g_products = [

    product_02,
    product_04,
    product_06,
    product_08,
    product_10,
    product_12,
    product_14

];

let argan_products = [
    
    product_20,
    product_21,
    product_22

];

let argan_beauty_products = [
    
    product_23,
    product_24,
    product_25

];

let amlou_1000g_products = [
    
    product_16,
    product_18

];

let amlou_500g_products = [
    
    product_17,
    product_19

];

let zafaran_products = [

    product_26

];

let orods = [

    {id:1 ,name_ar : 'العرض الأول'   , name_en : 'First Offer'  , imgsrc : 'img/orod/orod_01.jpg' , price : '200' , discription_ar : '', discription_eng : ''},
    {id:2 ,name_ar : 'العرض الثاني' , name_en : 'Second Offer' , imgsrc : 'img/orod/orod_02.jpg' , price : '100' , discription_ar : '', discription_eng : ''},

];

let baqats = [

    {id:1 ,name_ar : 'الباقة الأولى'   , name_en : 'First Packet'  , imgsrc : 'img/orod/orod_01.jpg' , price : '200' , discription_ar : '', discription_eng : ''},
    {id:2 ,name_ar : 'الباقة الثانية' , name_en : 'Second Packet' , imgsrc : 'img/orod/orod_02.jpg' , price : '100' , discription_ar : '', discription_eng : ''},

];

var ar_a = [
    
    'الصفحة الرئيسية',
    'العسل',
    'زيت أركان',
    'زيت أركان للتجميل',
    'أملو',
    'الزعفران',
    'الباقات',
    'العروض'

];

var en_a = [
    
    'home',
    'honey',
    'argan oil',
    'Argan oil for beauty',
    'amlou',
    'zafaran',
    'packages',
    'offers'
    
];

// START RESPONSIVE HEADER HEIGHT

headerDiv.style.height =  window.innerHeight - navDiv.offsetHeight+'px';

window.onresize = ()=>{headerDiv.style.height =  window.innerHeight - navDiv.offsetHeight+'px';}

li_a.forEach((e)=>{

    e.onclick = (ee)=>{
        ee.preventDefault();
        let eTop    = document.getElementById(e.getAttribute('data-id')).offsetTop;
        window.scroll({
            top: eTop,
            behavior: 'smooth'
          });
        }
})

// END RESPONSIVE HEADER HEIGHT

// START CHANGE WEB LANGUAGUE

langDiv.onclick = function(){

    styleDiv.innerHTML = `.bounce{animation: bounce .8s ease;}`;
    if(this.getAttribute('data-id') == 'ar'){
        this.innerHTML = 'English';
        this.setAttribute('data-id','en');
        li_a.forEach(function(e){
            for(let i = 0 ; i < li_a.length ; i++){
                li_a[i].innerHTML = en_a[i];
            }
        });
    }else{
        this.innerHTML = 'العربية';
        this.setAttribute('data-id','ar');
        li_a.forEach(function(e){
            for(let i = 0 ; i < li_a.length ; i++){
                li_a[i].innerHTML = ar_a[i];
            }
        });
    }
}

// END CHANGE WEB LANGUAGUE

// END MAIN VARS 

// START SLIDER

document.getElementById('slider').classList.add('slideUp');

let boxs = document.querySelectorAll('#slider .box')

for(let z = 0 ; z < boxs.length ; z++){
    // boxs[z].setAttribute('style',`z-index:${boxs.length - z}`);
}

let i = 1;
let t = (i-1)%boxs.length;
let c = i%boxs.length;
let b = (i+1)%boxs.length;

boxs.forEach((e)=>{e.classList.remove('top')})
boxs[t].setAttribute('class','box top')
boxs[c].setAttribute('class','box center')
boxs[b].setAttribute('class','box bottom')

setInterval(()=>{

    let t = (i)%boxs.length;
    let c = (i+1)%boxs.length;
    let b = (i+2)%boxs.length;
    boxs.forEach((e)=>{e.classList.remove('top')})
    boxs[t].setAttribute('class','box top')
    boxs[c].setAttribute('class','box center')
    boxs[b].setAttribute('class','box bottom')

    i++

},2900)

// END SLIDER

// CREATE CARDS

function createCards(cardsDiv,cardsTitle,cardsSizeArr,cardsSizeEn,products_arr,lang){

    let htmlCode = ``;

    if(cardsTitle !== ''){htmlCode += `<h3>${cardsTitle}</h3>`;}

    if(cardsSizeArr !== ''){htmlCode += `<h4>${cardsSizeArr}</h4>`;}

    if(cardsSizeEn !== ''){htmlCode += `<h4>${cardsSizeEn}</h4>`;}

    htmlCode += `<div class="cards">`;

    for( let i = 0 ; i < products_arr.length ; i++ ){

        var cardHtml = `

            <div class="card" product-id="${products_arr[i].id}" product-lang="${lang}" product-price="${products_arr[i].price}">
                <div class="title">${products_arr[i].name_ar}</div>
                    <div class="content"><img src="${products_arr[i].imgsrc}">
                    <div class="btns">
                        <i class="fa fa-2x fa-list-ul" title="معلومات حول المنتج"></i>
                        <i class="fa fa-2x cancel-demand-i">إلغاء الطلب</i>
                        <i class="fa fa-2x fa-shopping-cart" title="إضافة إلى السلة" product-id="${products_arr[i].id}"></i>
                    </div>
                </div>
                <div class="price">${products_arr[i].price} DH</div>
                <div class="demand-info">
                </div>
            </div>

        `;

        htmlCode += cardHtml;

    }

    htmlCode += `</div>`;

    cardsDiv.innerHTML += htmlCode;

}

// END CARDS

createCards(honeyDiv,'','','500 g',honey_500g_products,'ar');

createCards(honeyDiv,'','','1Kg',honey_1000g_products,'ar');

createCards(arganDiv,'','','1000ml , 500ml , 250ml',argan_products,'ar');

createCards(arganBeautyDiv,'','','250ml , 100ml , 50ml',argan_beauty_products,'ar');

createCards(amlouDiv,'','','1Kg',amlou_1000g_products,'ar');

createCards(amlouDiv,'','','500g',amlou_500g_products,'ar');

createCards(zafaranDiv,'','','2g',zafaran_products,'ar');
baqatDiv.innerHTML += `<h2 class="main-title">باقاتنا</h2>`;
createCards(baqatDiv,'','','',baqats,'ar');
orodDiv.innerHTML += `<h2 class="main-title">عروضنا</h2>`;
createCards(orodDiv,'','','',orods,'ar');

// START GET CARD INFO FUNCTIONS

document.querySelectorAll('.btns .fa-list-ul').forEach((e)=>{

    e.onclick = ()=>{
        layerDiv.classList.add('show');
        infoDiv.classList.add('show');
        let card = e.parentElement.parentElement.parentElement;
        let cardID = card.getAttribute('product-id');
        document.querySelector('#infoDiv .title span').innerHTML = products[cardID - 1].name_ar;
        document.querySelector('#infoDiv .types').innerHTML = `<b>الأحجام</b><span>`+products[cardID - 1].size_ar+`</span>` + `<span>`+products[cardID - 1].size_eng+`</span>`;
        document.querySelector('#infoDiv .photo img').src = products[cardID - 1].imgsrc;
        document.querySelector('#infoDiv .description span').innerHTML = products[cardID - 1].discription_ar;
    }

})

document.querySelector('#infoDiv .fa-close').onclick = ()=>{

    layerDiv.classList.remove('show');
    infoDiv.classList.remove('show');

};

document.querySelector('#product_selled_config .fa-close').onclick = ()=>{

    layerDiv.classList.remove('show');
    product_selled_config_Div.classList.remove('show');

};

document.querySelectorAll('.btns .fa-shopping-cart').forEach((e)=>{

    e.onclick = ()=>{

        input_product_nums.value = "1";
        let card = e.parentElement.parentElement.parentElement;
        let selected_product_id       = e.getAttribute('product-id');
        let selected_product_name_ar  = products[selected_product_id - 1].name_ar;
        product_selled_config_Div.classList.add('show');
        layerDiv.classList.add('show');
        card.classList.add('opened');
        let cardID = card.getAttribute('product-id');
        document.getElementById('save-demand-btn').setAttribute('selected-product-id',cardID);
        product_selled_config_Div.setAttribute('product-id',cardID - 1);
        product_selled_config_Div.setAttribute('selected-product-total-price',products[selected_product_id - 1].price);
        document.querySelector('#product_selled_config .title').innerHTML = `<h2>${products[cardID - 1].name_ar}</h2>`;
        document.querySelector('#product_selled_config .photo').innerHTML = `<img src="${products[cardID - 1].imgsrc}" title="${products[cardID - 1].name_ar}">`;
        document.querySelector('#product_selled_config .price').innerHTML = `${products[cardID - 1].price} DH`;
        total_selected_product_price.innerHTML = `${products[cardID - 1].price * input_product_nums.value} DH`;

    }
})

document.querySelector('#sellDiv .fa-close').onclick = ()=>{

    layerDiv.classList.remove('show');
    sellDiv.classList.remove('show');

};

layerDiv.onclick = function(){

    layerDiv.classList.remove('show');
    infoDiv.classList.remove('show');
    sellDiv.classList.remove('show');
    product_selled_config_Div.classList.remove('show');

}

document.getElementById('shopping-basket').onclick = function(){
    if(selled_products_arr.length == 0){
        alert('السلة فارغة')
    document.getElementById('products-selled-table').innerHTML = "السلة فارغة";
    document.getElementById('sell-total-div').innerHTML = "";
    document.getElementById('confirm-btn').innerHTML = "";
    };
    layerDiv.classList.toggle('show');
    sellDiv.classList.toggle('show');

}

document.getElementById('btn_plus').onclick = function(){

    let selected_product_id = product_selled_config_Div.getAttribute('product-id');
    input_product_nums.value = eval(input_product_nums.value) + 1;
    let selected_product_nums = input_product_nums.value; 
    total_selected_product_price.innerHTML = `${products[selected_product_id].price * selected_product_nums} DH`;
    product_selled_config_Div.setAttribute('selected-product-nums',input_product_nums.value);

}

document.getElementById('btn_minus').onclick = function(){

    if(input_product_nums.value < 2){input_product_nums.value = 0}else{
        input_product_nums.value -= 1;
    }

    product_selled_config_Div.setAttribute('selected-product-nums',input_product_nums.value);
  
    let selected_product_id = product_selled_config_Div.getAttribute('product-id');
    let selected_product_nums = input_product_nums.value; 
  
    total_selected_product_price.innerHTML = `${products[selected_product_id].price * selected_product_nums} DH`;

}

function addProductToCart(){

    if(input_product_nums.value > 0){

        let saveBtn           = document.getElementById('save-demand-btn');
        let addedProductID    = product_selled_config_Div.getAttribute('product-id');
        let addedProductNum   = input_product_nums.value;
    
        let addedProductTotal = products[addedProductID].price * addedProductNum;
        let openedCard = document.querySelector('.card.opened');
        openedCard.children[3].innerHTML = `
        <label class="nums"><b>عدد العينات</b><span        class="demand-info-nums">${addedProductNum}<span></label>
        <label class="total-price"><b>الثمن الكلي</b><span class="demand-info-t-price">${addedProductTotal}<span></label>
        `;
        let product_selled = "{ id : "+addedProductID+", nums : "+addedProductNum+"}";
        openedCard.setAttribute('selled-product-nums',addedProductNum);
        document.querySelector('.card.opened').classList.add('selected');
        document.querySelector('.card.opened').classList.remove('opened');
    
        product_selled_config_Div.style.top = '-120%';
        product_selled_config_Div.style.left = '-70%';
        product_selled_config_Div.style.transform = 'scale(.2)';
        product_selled_config_Div.style.opacity = '0';
        scanSelectedCards();
        create_selected_products_table()
        setTimeout(() => {
            styleDiv.innerHTML = `#shopping-basket:after {content:"${selled_products_arr.length}"}`;
            alert('تم تسجيل الطلب بنجاح');
            product_selled_config_Div.classList.remove('show');
            product_selled_config_Div.style = '';
            layerDiv.classList.remove('show');
        }, 700);
    }else{
        alert('أقل عدد هو 1')
    }


}

input_product_nums.oninput = function(){

    let selected_product_id = product_selled_config_Div.getAttribute('product-id');
    let selected_product_nums = input_product_nums.value; 
    product_selled_config_Div.setAttribute('selected-product-nums',this.value); 
    total_selected_product_price.innerHTML = `${products[selected_product_id].price * selected_product_nums} DH`;

}

document.querySelectorAll('.card .cancel-demand-i').forEach((e)=>{

    e.onclick = () => {

        let selectedCard = e.parentElement.parentElement.parentElement;
        selectedCard.classList.remove('selected');
        selectedCard.setAttribute('selled-product-data','');
        styleDiv.innerHTML = `#shopping-basket:after {content:"${document.querySelectorAll('.card.selected').length}"}`;
        scanSelectedCards();
        create_selected_products_table();
    }

})

function scanSelectedCards(){

    let selectedCards = document.querySelectorAll('.card.selected');

    let new_selected_products_arr = [];

    for( let i = 0 ; i < selectedCards.length ; i++ ){

        let selected_product_id   = selectedCards[i].getAttribute('product-id');
        let selected_product_nums = selectedCards[i].getAttribute('selled-product-nums');
        let new_product           = { id : selected_product_id, nums : selected_product_nums};
        new_selected_products_arr.push(new_product);

    }

    selled_products_arr = new_selected_products_arr;

    return selled_products_arr;

}


function create_selected_products_table(){

    let tableDiv = document.getElementById('products-selled-table');

    let htmlCode = `
                     <tr class="top-line"><td>اسم المنتوج</td><td>الحجم</td><td>عدد العينات</td><td>ثمن العينة الواحدة</td><td>الثمن</td></tr>
    `;

    let total = 0;

    for( let i = 0 ; i < selled_products_arr.length ; i++ ){

        let selected_product_id    = selled_products_arr[i].id;
        let selected_product_nums  = selled_products_arr[i].nums;
        let selected_product_name  = products[selected_product_id - 1].name_ar;
        let selected_product_size  = products[selected_product_id - 1].size_eng;
        let selected_product_price = products[selected_product_id - 1].price;
        let total_price = selected_product_price * selected_product_nums;

        htmlCode += `<tr class="line ltr">
                        <td>${selected_product_name}</td>
                        <td>${selected_product_size}</td>
                        <td>${selected_product_nums}</td>
                        <td><b>${selected_product_price} DH</b></td>
                        <td><b>${total_price} DH</b></td>
                    </tr>`;
        total += total_price;

    }

    tableDiv.innerHTML = htmlCode;
    
    let sell_total_div = document.getElementById('sell-total-div');

    sell_total_div.innerHTML = `<b>الثمن الإجمالي</b><span>${total}DH</span>`; 

    document.getElementById('confirm-btn').innerHTML = `
    
        <form> <!-- action="https://formsubmit.co/81e026d386121fb2a272cbacfa12d7d0" -->
            <label><b>الإسم الكامل</b><input id="name" type="text" name="name" required ></label>
            <label><b>رقم الهاتف</b><input id="phone" type="phone" name="phone" required ></label>
            <label><b>العنوان</b><input id="adress" type="text" name="adress" required ></label>
            <button onclick="sendMail()">تأكيد الطلب</button>
        </form>`;

}

function sendMail(){
    var params = {
        name   : document.getElementById('name').value,
        phone  : document.getElementById('phone').value,
        adress : document.getElementById('adress').value,
        message : writeMessage()
    }

    const serviceID = "service_6c51cfl";

    const templateID = "template_dw3eyx7";

    emailjs
        .send(serviceID,templateID,params)
        .then( (res) => {
            document.getElementById('name').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('adress').value = "";
            console.log(res);
            alert('تم إرسال طلبك بنجاح')
        })
        .catch((err) => console.log(err));

};




function writeMessage(){

    let selected_products_array = scanSelectedCards();
    let name   = document.getElementById('name').value;
    let phone  = document.getElementById('phone').value;
    let adress = document.getElementById('adress').value;

    let total_price = 0;

    let message = `
    
    ،السلام عليكم ورحمة الله وبركاته

    ،شركة نقاء الطبيعة

     ${name} : الإسم

     ${phone}: رقم الهاتف

     ${adress} : العنوان

     : قائمة الطلبات

    `;

    for(let i = 0 ; i < selected_products_array.length ; i++){

        let product_name         = products[eval(selected_products_array[i].id - 1)].name_ar;
        let product_size         = products[eval(selected_products_array[i].id - 1)].size_eng;
        let product_price        = products[eval(selected_products_array[i].id - 1)].price;
        let product_nums         = selected_products_array[i].nums;
        let product_total_price  = products[eval(selected_products_array[i].id - 1)].price * selected_products_array[i].nums;
        total_price += product_total_price;
        message += `
        ________________________________________
         ${product_name}
         ${product_size} : الحجم
         ${product_price} DH : ثمن العينة الواحدة
         ${product_nums} : عدد العينات
         ${product_total_price} DH : الثمن الإجمالي
        ________________________________________
        `;

    }

    message += `
    ________________________________________
    ${total_price} DH : الواجب أداؤه
    ________________________________________
    `;

    return message;

}

document.getElementById('mobilebtn').onclick = function(){
    document.querySelector('.navbar').classList.toggle('show');
}