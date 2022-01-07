

module.exports = {
    decode(req, res){
        var arrList= [
   
            { codigo: ' '  ,    codigoReplace: '%20'},
            { codigo: '"'  ,    codigoReplace: '%22'},
            { codigo: '$'  ,    codigoReplace: '%24'},
            { codigo: ','  , 	codigoReplace: '%2C'},
            { codigo: '/'  , 	codigoReplace: '%2F'},
            { codigo: '<'  , 	codigoReplace: '%3C'},
            { codigo: '>'  ,	codigoReplace: '%3E'},
            { codigo: '#'  ,	codigoReplace: '%23'},
            { codigo: '%'  ,	codigoReplace: '%25'},
            { codigo:  '|' ,	codigoReplace: '%7'}
         
        ]
        
        
        let replaceString = []
        for(var i=0; i < arrList.length; i++) {
            let textoInicial = String(req.body.texto)
            let strCodigo = String(arrList[i].codigo)
            let strCodigoReplace =String(arrList[i].codigoReplace)
        
           
            if(i === 0){
                let replacado = textoInicial.replaceAll( strCodigoReplace, strCodigo )
                replaceString.push(replacado)
            } else{
                let str = String(replaceString[0])
                replaceString.pop()
                let remarquei = str.replaceAll( strCodigoReplace, strCodigo )
                replaceString.push(remarquei)
            }
        
        }
        res.send(String(replaceString))  
    }
      
}
