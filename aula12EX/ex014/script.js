function carregar(){

var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var data=new Date()
var hora =data.getHours()
//var hora=12
//var minutos=39
var minutos=data.getMinutes()    
msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos `

if (hora >=0 && hora<12 ){
    //BOM DIA
    img.src='fotomanha.png'
    document.body.style.background= '#e2cd90f'   
    document.getElementById('rodape').style.color='yellow'   


}else if (hora>=12 && hora<18) {
    //BOA TARDE
    img.src='fototarde.png'
    document.body.style.background='brown'
    document.getElementById('rodape').style.color='red'

}else {
    //BOA NOITE
   
    img.src='fotonoite.png'
    document.body.style.background='black'
    document.getElementById('rodape').style.color='purple'

}
}