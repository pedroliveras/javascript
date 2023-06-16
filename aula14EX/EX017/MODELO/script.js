function tabuada(){
    
    var num= document.getElementById('inum')
    var tab=document.getElementById('seltab') 

    if (num.value.length==0){
        alert('campo em branco')
        
    }else{
        tab.innerHTML=''
        var n=Number(num.value)
        var c=1
        while(c<=10){
            var item=document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            item.value= `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }

}
