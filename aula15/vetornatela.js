let valores=[8,1,7,4,2,9]
valores.push(44)
valores[3]=0

console.log(`vetor é ${valores}`)
/*
for (cont=0;cont<valores.length;cont++){
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
}
*/
for (let cont in valores){
    console.log(`na posição ${cont} - ${valores[cont]}`)
}

console.log(valores.indexOf(8))