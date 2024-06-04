
var contar_Inputs = 0
function criar(){
    var Onde_Inserir = document.getElementById("sessao")
    var Texto_A_Inserir = document.getElementById("texto-a-inserir").value
    if(Texto_A_Inserir == ""){
        // aqui é so para nao executar nada
    }else {
    
    contar_Inputs++
    ///////////////////////////////////////////////////////
    
    let inserido = document.createElement("input")
    inserido.setAttribute("type", "text")
    inserido.setAttribute("name", "text")
    inserido.setAttribute("class", "text")
    inserido.setAttribute("id", contar_Inputs)
    inserido.readOnly = true
    inserido.value = Texto_A_Inserir

//////////////////////////////////////////////////////////////

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    checkbox.setAttribute("name",contar_Inputs)
    checkbox.setAttribute("onclick", "riscar(this.name)")

///////////////////////////////////////////////////////////

    let deletar_Afazer = document.createElement("img")
    deletar_Afazer.setAttribute("src", "src/54324.png")
    deletar_Afazer.setAttribute("class", "imagem-apagar")
    deletar_Afazer.setAttribute("name", contar_Inputs)
    deletar_Afazer.setAttribute("onclick", "apagar(this.name)")
//////////////////////////////////////////////////////
    let div_Dos_Afazeres = document.createElement("div")
    
    div_Dos_Afazeres.setAttribute("class", `${contar_Inputs} listinhas`)

//////////////////////////////////////////////////////
div_Dos_Afazeres.appendChild(checkbox)
div_Dos_Afazeres.appendChild(inserido)
div_Dos_Afazeres.appendChild(deletar_Afazer)
    
////////////////////////////////////////////////

    Onde_Inserir.appendChild(div_Dos_Afazeres)
    
    document.getElementById("texto-a-inserir").value = ""

    }
}

function riscar(oque_riscar){

    var riscado = document.getElementById(oque_riscar)
    
/////////////////////////////////////////////////////////
    if (riscado.style.textDecoration === "line-through rgba(0, 0, 0, 0.76)"){
        riscado.style.textDecoration = "none"
        document.getElementById(oque_riscar).style.color =  "#cfddc8"
    }else{
        riscado = document.getElementById(oque_riscar).style.textDecoration = "line-through"
        document.getElementById(oque_riscar).style.textDecorationColor = "rgba(0, 0, 0, 0.76)"
        document.getElementById(oque_riscar).style.color =  "#cfddc871"
    }
///////////////////////////////////////////////////////////
    
}

function apagar(oque_excluir){
    document.getElementsByClassName(oque_excluir)[0].style.display = "none"
    
}