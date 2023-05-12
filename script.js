
function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('screenNumber').value = ''
            ultimoCaracter =''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
                document.getElementById('screenNumber').value += valor
        }

        if(valor === '='){
            let result =  eval(document.getElementById('screenNumber').value)
            document.getElementById('screenNumber').value =  result
            ultimoCaracter = ''
        }

    } else if(tipo === 'valor'){
        document.getElementById('screenNumber').value += valor
        ultimoCaracter = valor
    }
}