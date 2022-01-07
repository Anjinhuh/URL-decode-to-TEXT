

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
            { codigo: '|'  ,	codigoReplace: '%7'},
            { codigo: '!'  ,    codigoReplace: '%21'},
            { codigo: '#'  ,    codigoReplace: '%23'},
            { codigo: '&'  ,    codigoReplace: '%26'},
            { codigo: "'"  ,    codigoReplace: '%27'},
            { codigo: '('  ,    codigoReplace: '%28'},
            { codigo: ')'  ,    codigoReplace: '%29'},
            { codigo: '*'  ,    codigoReplace: '%2A'},
            { codigo: '+'  ,    codigoReplace: '%2B'},
            { codigo: ':'  ,    codigoReplace: '%3A'},
            { codigo: ';'  ,    codigoReplace: '%3B'},
            { codigo: '='  ,    codigoReplace: '%3D'},
            { codigo: '?'  ,    codigoReplace: '%3F'},
            { codigo: '@'  ,    codigoReplace: '%4-'},
            { codigo: '['  ,    codigoReplace: '%5B'},
            { codigo: ']'  ,    codigoReplace: '%5D'},
            
         
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
