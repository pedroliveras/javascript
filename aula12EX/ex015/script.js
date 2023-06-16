function verificar(){

    var data=new Date()
    var ano=data.getFullYear()
    var fAno=window.document.getElementById('itxtano')
    var res=window.document.getElementById('res')
    

    if (fAno.value.length==0 || fAno.value>ano){
        window.alert('Verifique os dados digitados')
    } else{
        var fsex=document.getElementsByName('sex')
        var idade= ano - Number(fAno.value)
        var genero=''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        
        if (fsex[0].checked){
         genero='homem' 
            if(idade>=0 && idade <10){
                img.setAttribute('src', 'homembebe.png')

            }else if (idade <21){
                img.setAttribute('src', 'homemjoverm.png')
 
            } else if (idade <50){
                img.setAttribute('src', 'homemadulto.png')

            } else{
                img.setAttribute('src', 'homemidoso.png')

            }
          

        }else if(fsex[1].checked) {
            genero='mulher'
            if(idade>=0 && idade <10){
                img.setAttribute('src', 'mulherbebe.png')

            }else if (idade <21){
                img.setAttribute('src', 'mulherjovem.png')
 
            } else if (idade <50){
                img.setAttribute('src', 'mulheradulta.png')

            } else{
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
    res.style.textAlign='center'
    res.innerHTML= `detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }
}