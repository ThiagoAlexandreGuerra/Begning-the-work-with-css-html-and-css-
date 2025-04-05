const caixaCurso=document.querySelector("#caixaCurso")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2= document.querySelector("#c1_2")
const cursos=["HTML","css","javascript","react" ,"PHP","Mysql" ,"reactnative"]
const btn_cursoSelecionado= document.getElementById("btnCursoSelecionado")

cursos.map((el, chave)=>{
    console.log(el)
    const novoElemento= document.createElement("div")
    novoElemento.setAttribute("id", "c"+chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML= el

    const comandos= document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb= document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name","rb_cursos")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCurso.appendChild(novoElemento)

})