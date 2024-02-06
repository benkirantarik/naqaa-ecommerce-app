'use strict';

let honey_1000g_products = [

    product_01,
    product_03,
    product_05,
    product_07,
    product_09,
    product_11,
    product_13

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
    
    product_21,
    product_22,
    product_23

];

let argan_beauty_products = [
    
    product_24,
    product_25,
    product_26

];

let amlou_1000g_products = [
    
    product_16,
    product_18

];

let amlou_500g_products = [
    
    product_17,
    product_19

];

let zafaranproducts = [

    product_27

]

let orods = [

    {name_ar : 'العرض الأول'   , name_en : 'First Offer'  , imgSrc : 'img/orod/orod_01.jpg' , price : '200 DH' , description_ar : '', description_eng : ''},
    {name_ar : 'العرض الثاني' , name_en : 'Second Offer' , imgSrc : 'img/orod/orod_02.jpg' , price : '100 DH' , description_ar : '', description_eng : ''},

]

let baqats = [

    {name_ar : 'الباقة الأولى'   , name_en : 'First Packet'  , imgSrc : 'img/orod/orod_01.jpg' , price : '200 DH' , description_ar : '', description_eng : ''},
    {name_ar : 'الباقة الثانية' , name_en : 'Second Packet' , imgSrc : 'img/orod/orod_02.jpg' , price : '100 DH' , description_ar : '', description_eng : ''},

]

function fillCards(productType,product_size_ar,product_size_eng,products,parentID,lang){
    
    let code = `<h2>${products_arr}</h2><div class="cards">`;
    if(productType == ''){
        code = `<h4>${product_size_ar}<span>${product_size_eng}</span></h4><div class="cards">`;
    }else if(product_size_   ar == '' && product_size_eng == ''){
        code = `<h3>${productType}</h3><div class="cards">`;
    }else if(productType == '' && product_size_ar == '' && product_size_eng == ''){
        code = `<div class="cards">`;
    }else{
        code = `
        <h3>${productType}</h3>
        <h4>${product_size_ar}<span>${product_size_eng}</span></h4>
        <div class="cards">
    `;
    }

    for( let i = 0 ; i < products.length ; i++ ){

        if(lang == 'ar'){var name = products[i].ar_name}else{var name = products[i].eng_name}

        code += `

        <div class="card" data-name="${name}" data-p-img-src="${products[i].src}" data-price="${products[i].price}">
            <div class="title">${name}</div>
            <div class="content"><img src="${products[i].src}">
                <div class="btns">
                    <i class="fa fa-2x fa-list-ul" title="معلومات حول المنتج"></i>
                    <i class="fa fa-2x fa-shopping-cart" title="إضافة إلى السلة"></i>
                </div>
            </div>
            <div class="footer">${products[i].price}</div>
        </div>

        `;

    }
    code += '</div>';

    document.getElementById(parentID).innerHTML += code;

}

fillCards('العسل','1 كيلوغرام','1 Kg',honey_1000g_products,'honeyDiv','ar');

fillCards('','نصف كيلوغرام','500 g',honey_500g_products,'honeyDiv','ar');

fillCards('','رابعة','250 g',honey_250g_products,'honeyDiv','ar');

fillCards('أركان','لتر واحد ، نصف لتر ، رابعة','1 Litre , 500 ml , 250 ml',arganproducts,'arganDiv','ar');

fillCards('أركان للتجميل','250 مل , 100 مل , 50 مل','250 ml , 100 ml , 50 ml',arganCosproducts,'arganCosDiv','ar');

fillCards('أملو','1 كيلوغرام','1Kg',amlouKiloproducts,'amlouDiv','ar');

fillCards('','نصف كيلو','500 g',amlou_500g_products,'amlouDiv','ar');

fillCards('الزعفران','2 غرام','2 g',zafaranproducts,'zafaranDiv','ar');

fillCards('الباقات','','',baqats,'baqatDiv','ar');

fillCards('العروض','','',orods,'3orodDiv','ar');



var text_test = `
من واحات و جنات بلد المغرب الأصيل ،شركة # تنقلكم في رحلة ممتعة و مميزة ،
رحلة تعبر بكم بمنتوجاتها الطبيعية الصحية ، إلى عالم السعادة و الصفاء
`;

// writer(2000,80,3000,10,text_test,document.querySelector('.text p'));

document.getElementById('mobilebtn').onclick = function(){
    document.querySelector('navbar').classList.toggle('show');
}





