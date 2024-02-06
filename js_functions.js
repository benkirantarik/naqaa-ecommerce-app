
// START AUTO WRITER 

function writer(wait,write_time,show_time,erase_time,text,ele){
    let i = 0;
    let text_copy = text;
    ele.innerHTML = '';
    setTimeout( 
       () => {
        let x = setInterval(             
            ()=>{
                if(i == text.length ){
                    clearInterval(x);
                    setTimeout(()=>{
                        let y = setInterval(()=>{
                            if(text.length == 0){
                                clearInterval(y);
                                writer(wait,write_time,show_time,erase_time,text_copy,ele);
                            }
                            text = text.slice(0, -1);
                            ele.innerHTML = text;
                        },erase_time)
                    },show_time);
                }else{
                    if(text[i]=='#'){
                        ele.innerHTML += '<b class="tag_company">';
                        let title = 'نقاء الطبيعة';
                        let ii = 0;
                        let z = setInterval(()=>{
                            if(ii == title.length - 1){clearInterval(z)}
                            document.querySelector('.tag_company').innerHTML += title[ii];
                            ii++;
                        },write_time/title.length);
                        i++;
                    }else{
                        ele.innerHTML += text[i];
                        i++;
                    }
                }
            }
        ,write_time);
        console.log(text.length);
       }
    ,wait);
}

// END AUTO WRITER 