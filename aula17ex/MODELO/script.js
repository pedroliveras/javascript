let numeros=[]


var numlist=document.getElementById('ilista')
var resultados=document.getElementById('res')
var num=window.document.getElementById('itxtnum')

function adicionar(){
        
        var repet=0
        resultados.innerHTML=''
        

        //alert(numeros.indexOf(Number(num.value)))
    
        if (num.value==0 || num.value>100 || numeros.indexOf(Number(num.value))!==-1){

            alert('Valor inválido ou já encontrado na lista')
        } else{
            
            
            numeros.push((Number(num.value)))
            let item=document.createElement('option')


            item.text= `Número ${num.value} adicionado` 
            numlist.appendChild(item)
        
        
        }
        num.value=''
        num.focus()
        //alert(Number(num.value))
}


function finalizar(){
        var lista=window.document.getElementById('ilista')
        let soma=0
        let media=0
        let maior=numeros[0]
        let menor=numeros[0]
        if (numeros.length==0){
            alert('Nenhum número inserido')
            num.focus()
        }else{
                for(let pos in numeros){

                        if (numeros[pos] > maior){
                            maior=numeros[pos]
                        }
                        if (numeros[pos] < menor){
                            menor=numeros[pos]
                        }
                        soma+=(numeros[pos])
                }

                resultados.innerHTML=`Numeros Inseridos ${numeros} <br>`
                resultados.innerHTML+=`Ao todo foram cadastrados ${numeros.length} numeros <br>`
                resultados.innerHTML+=`Soma dos Numeros é ${soma} <br>`
                resultados.innerHTML+=`A média dos números é ${soma/numeros.length} <br>`
                resultados.innerHTML+=`O maior numero informado é ${maior} <br>`
                resultados.innerHTML+=`O menor numero informado é ${menor}`
            }
}