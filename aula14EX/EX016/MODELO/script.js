function contar(){
   var inicio=window.document.getElementById('itxtinicio')
   var ini=Number(inicio.value)
   var fimm=window.document.getElementById('itxtfim')
   var fim=Number(fimm.value)
    var passo=window.document.getElementById('itxtpasso')
    var pass=Number(passo.value)
    var res=window.document.getElementById('res')
    res.innerHTML=''

    if(inicio.value.length==0 || fimm.value.length==0 || passo.value.length==0 || pass=='')  {
        alert('há campos em branco / preenchidos incorretamente')
    }else {

       if (ini<fim){
               while(ini<fim){
                  res.innerHTML+=`${ini}&#9758;`
                 ini=ini+pass
              } 
            }else{
                while(ini>fim){
                  res.innerHTML+=`${ini}&#9758;`
                  ini=ini-pass
                }

            }
          //if(inicio.value<fim){
               res.innerHTML+='&#9873;' 
         // }
        //res.innerHTML+=ini
        
        //res.innerHTML=(`inicio ${ini}, fim ${fim}, passo ${pass}`
    }

    
}