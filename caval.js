let input =document.getElementById('numbt-input');
const btn =document.getElementById('btn');



document.addEventListener('keydown',(e)=>{
     //console.log(e.key)

    
    if(e.key=='Enter' || e.key=='=' ){
        let inputvalue=eval(input.value);
        input.value=inputvalue; 
    }
    if(e.key && e.key !=='Enter' && e.key !=='Backspace' && e.key !=='=' ){
        input.value =input.value + e.key;
    }
    if(e.key == 'Delete'){
        input.value='';
    }
    if(e.key=='Backspace'){
        input.value=input.value.slice(0,-1);
    }

})