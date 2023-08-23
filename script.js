let input=document.getElementById('input-Box');
let btn_arr=document.querySelectorAll('button');
 let strings="";
 let arr=Array.from(btn_arr);
 arr.forEach(val =>{
    val.addEventListener('click',(element) =>{
        let temp=element.target.innerHTML;
        if((temp=='+'||temp=='-'||temp=='='||temp=='/'||temp=='%'||temp=='*')&&strings.length==0){
            alert("Please enter proper value !")
        }
        else if(element.target.innerHTML=='='){
            strings=eval(strings);
            input.value=strings;
        }
        else if(element.target.innerHTML=='DL'){
            strings=strings.substring(0,strings.length-1);
            input.value=strings;

        }
        else if (element.target.innerHTML=='AC'){
            strings="";
            input.value=strings;

        }
        else{
            strings=strings+element.target.innerHTML;
            input.value=strings;
        }
        

    })
 })