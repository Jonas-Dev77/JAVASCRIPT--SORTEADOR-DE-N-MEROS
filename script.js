 
 
 function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)


    if  (min === null || max === null){
        alert("insira um valor mínimo e máximo")


    }
    
    
     else {
         const result = (Math.floor(Math.random() * (max - min + 1)) + min);


   

    const inputResultado = document.getElementById(".value");
    inputResultado.value = result;

        console.log("resultado")

    }
    
   

    }
    
   

    

    


    



   

   
 