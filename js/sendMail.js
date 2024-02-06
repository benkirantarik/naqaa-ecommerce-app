function sendMail(){
    var params = {
        name   : document.getElementById('name').value,
        phone  : document.getElementById('phone').value,
        email  : document.getElementById('email').value,
        adress : document.getElementById('adress').value,
        selected_products : products_selled_arr
    }

    const serviceID = "service_6c51cfl";

    const templateID = "template_dw3eyx7";

    emailjs
        .send(serviceID,templateID,params)
        .then( (res) => {
            document.getElementById('name').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById('adress').value = "";
            console.log(res);
            alert('تم إرسال طلبك بنجاح')
        })
        .catch((err) => console.log(err));

}

