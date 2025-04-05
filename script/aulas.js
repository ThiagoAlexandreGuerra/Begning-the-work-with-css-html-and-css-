//adicionar as coisas na posição que eu quero aulas 43 e 44 e 45
function funçãoQuadratica(a, b ,c){
    let delta = b**2 - 4*a*c;
    if(delta>=0){
        let SqtrDelta = Math.sqrt(delta);
        let x1 = (-b + SqtrDelta)/2*a;
        let x2 = (-b - SqtrDelta)/2*a;
        let yVerticeDaFunção = -(delta/(4*a));
        let xVerticeDaFunção = -(b/(2*a));
            return "as raizes da função são respectivamente " + x1 +" "+ x2+" e os x e y do vertice da função são respectivamente " + xVerticeDaFunção+" "+ yVerticeDaFunção;
        }else{
            return "sua expreção não possui raiz dentro dos números inteiros";
        }
        
    } 
function SomatorioDeX(x, data){
    
}     
function covariância( SomatorioDeX , SomatorioDeY , SomatorioDeXeY , NumeroDeTermos){
    let Cov = (NumeroDeTermos*SomatorioDeXeY)-(SomatorioDeX*SomatorioDeY);
    return Cov;
}
var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];
  
  // This makes sure the data is exported in node.js —
  // `require('./path/to/journal.js')` will get you the array.
  if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
    module.exports = JOURNAL;
  if (typeof global != "undefined" && !global.JOURNAL)
    global.JOURNAL = JOURNAL;

function tableFor (event , journal){
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length ; i++){
        let entry = journal[i] , index = 0 ; 
        if (entry.events.includes (event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}


  

const yetArreyanother = [2 , 2 , 3, 4, 5, 5, 7, 7, 7, 8, 9, 10]
const uniqueArrey= yetArreyanother.filter(( elem , index, arr)=> arr.indexOf(elem)==index)

const oque= JOURNAL.filter( (elemento)=>{
    if(elemento.squirrel== 1 ){return elemento.squirrel}
})
//console.log(oque)

let materias = [
    { diciplina:  "quimica" , gosto: "pouco", nota: 4},
    { diciplina: "biologia" , gosto: "muito" , nota: 8},    
    { diciplina:  "matematica", gosto: "top" , nota: 10},
    { diciplina: "historia" , gosto: "top", nota: 10}, 
    { diciplina: "fisica" , gosto: "top" , nota: 10},
    { diciplina: "portugues" , gosto: "lixo", nota: 2},
    { diciplina: "computaçao" , gosto: "top", nota: 10},
    { diciplina: "sociologia" , gosto: "bom" , nota: 8},
    { diciplina: "filosofia" , gosto: "bom" , nota: 8}
]; 
const apenasNotas= materias.reduce((el1, el2 , el3)=> {
    el1.push(el2.nota)
    return el1;
},[] )
//console.log(apenasNotas)

const apenasDiciplinas = materias.reduce( (el1 , el2) =>{
    el1.push(el2.diciplina) 
    return el1;
} , [] )
//console.log(apenasDiciplinas)

const preferencias= materias.filter((element)=> {
    if(element.gosto=="top"){return element.diciplina}
    } 
) 
//console.log(preferencias)

let num = [1,4,7,7,8,7,5,9,6,8,7]
const oeq= num.filter((elm)=> elm>7)
//bimwise***********************************************************************************************************
let num1= 10;
let num2 = 11;
const valor= 10 & 11;
const valorou= 10 || 11;
//console.log(valor)
let num3= 10;
let valorbin= num1<<3;
//console.log(valorbin)
//operações ternarias(?)*******************************************************************************************
let tipo = 134
const parOuImpar= (!(tipo%2) ? "par" : "impar")
//console.log(parOuImpar)
//operador unario (typeof)*********************************************************************************************
let w1 = 10;
let w2 = "10";
let w3 = false;
let w4 = {papel: "A4"}
//console.logtypeof(w4))
//operador spread(...)************************************************************************************************
let jogadores=[
    {jogador:"filipinho" ,poder: "voar", velocidade:100 , força: 80 },
    {jogador: "thiago" , poder: "todos" , velocidade: 100 , força: 100 , habilidade:"patins"}
    ]
let perfis= [
    {magro: "filipinho" , chato: 10},
    {forte: "thiago", chato: 5}
]
const P1=[jogadores,perfis]
//console.log(P1)

const player = {nome:"gabriel", cidade:"natal" , pontos:"1000", beleza:100}
const player2= {nome:"thiago" , cidade:"juis de fora", pontos:1000 , capacidade:100}
const player3 = {...player,...player2}
//console.log(player3)

const soma= (v1 , v2, v3)=>{
   let sum= v1+v2+v3
    return sum;
}
const bale=[1,3,4,5,6,7]
//console.log(soma(...bale))

const objs= document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]
//console.log(objs2)
//console.log(objs)
objs2.forEach(ccadpt => {
    console.log(ccadpt);
});
//switch********************************************************************************************************
const colocação= 1;
switch(colocação){
    case 1:
        console.log("você ganhou")
        break
    case 2:
        console.log("segundo lugar")
        break
    case 3: 
        console.log("terceiro lugar")
        break
    case 4 : case 5 : case 6 :
        console.log("premio de cosolação")
        break 
    default :
        console.log("você perdeu") 
        break
}
//loops(for definido)***********************************************************************************************************
for( let i= 0 ; i<10 ; i= i+2){
   // console.log("impressão"+ i )
}

//console.log("acabou")

//let bin=[1,2,3,4,5,6,7,8]
//for(n in bin){
    //console.log(bin[n])
//}
//for(n of bin){
    //console.log(n)
//}
//(while indefinido)
let n =0 
//while(n<5){
//    console.log(n)
//    n++
//}

//do{
//    console.log("Thiago Alexandre Guerra" + n)
//    n++
//}while(n<10)

//break e continue****************************************************************************************************
//let max=1000
//let min= 0
//while(min<max){
//    if(min>10){
//        console.log("acabou")
//        break
//    }else{
//        console.log("Thiago Alexandre Guerra" + min)
//    }
//    min++
//}

//function*********************************************************************************************************

function ABC(){
    let d1= document.getElementById("d1")
    let d2= document.getElementById("d2")
    let d3= document.getElementById("d3")
    d1.innerHTML="Alexandre Guerra"
    d2.innerHTML="Alexandre Guerra"
    d3.innerHTML="Alexandre Guerra"
}
//ABC()

//rest em functions(...)
function sooma(...valores){
        let quantidade= valores.length ; 
        console.log(quantidade)
        let Z = 0;

//      for(let S = 0 ;  S<quantidade ; S++){
    //         Z += valores[S];
  //        console.log("o resultado da soma é "+ Z)
  //      }
        for( let S of valores){
            Z += S 
        }
        return Z;
    }
    //console.log(sooma(5,6,4,6,7,8,9,10,4,43,5))

//funções anonimas e construtivas, as quais tambem são anonimas.
let W= function(w1 , w2){
    return w1+w2 ;
}
console.log(W(1,2))

//construtiva:
let T = Function("T1" , "T2" , "return T1 + T2")
//console.log(T(3,4))

let K = (K1 , K2)=> K1+K2 
//console.log(K(12,4))

let A = ()=>{
    let A1 = document.getElementById("A1")
    let A2 = document.getElementById("A2")
    let A3 = document.getElementById("A3")
    let A4 = document.getElementById("A4")
    let A5 = document.getElementById("A5")
    A1.innerHTML="THIAGO ALEXANDRE GUERRA"
    A2.innerHTML="GABRIEL SILVA PEXOTO"
    A3.innerHTML="AMANDADA SIQUEIRA BARBOSA MELO"
    A4.innerHTML="FILIPE DE FREITAS CARDOSO"
    A5.innerHTML="PEDRO SANTOS DE VIEIRA CABRAL"
}

const somarr= vall=>{
    let ress = 0;
    for(let v of vall)                  //colocando couchetes o for deixa enchergar a 
        ress += v                       //totalidade do Arrey
        return ress
}
const somma= (...valoress)=>{
    return somarr(valoress)
}
//console.log(somma(1,14,56,45,74,13,85))

const F = (...D) =>{ 
    const M = R =>{
        let S = 0 ;
        for(let H of D)
            S += H
        return S;
    }
return M(D)
}
console.log (F(1,14,56,45,74,13,8))

//funções geradoras******************************************************************************************* 
function* cardapio(){
    yield "você gosta de peixe?"
    yield"você gosta de feijoada?"
}
//uso do this********************************************************************************************************

function Aluno(notas, nome){
    this.nome = nome
    this.nota = notas
}


//get elements by tag name*********************************************************************************************
const yua =[...document.getElementsByTagName("div")]
console.log(yua)


//querysellectroall and adventlistiner****************************************************************************************
const cursos=[...document.querySelectorAll(".curso")]
console.log(cursos)

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
    const el= evt.target
    el.classList.add("destaque")
    console.log(el.id + "foi clicado")
    })
})
//aula praticando o java script***********************************************************************************

const caixa1= document.querySelector("#caixa1")
const caixa2= document.querySelector("#caixa2")
const btn_transferir= document.querySelector("#btn_transferir")
const todosOsCurso= [...document.querySelectorAll(".curso")]

todosOsCurso.map((el)=>{
    el.addEventListener("click" , (evt)=>{
        const curso= evt.target
        curso.classList.toggle("selecionado") //o toggle funciona da seguinte forma se selecionado estiver na classe ele remove e se nao estiver ele adiciona
    })
})

btn_transferir.addEventListener("click",(el)=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    console.log(cursoSelecionado)
    const cursoNaoSlecionado= [...document.querySelectorAll(".curso:not(.selecionado)")]
    console.log(cursoNaoSlecionado)
    
    cursoSelecionado.map((el)=>{
        //caixa2.appendChild(el)
    })
    cursoNaoSlecionado.map((el)=>{
       // caixa1.appendChild(el)
    })
})


//inserir elementos no dom***************************************************************************************
const caixa1 =document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const cursos= ["html", "CSS", "javascript","PHP","react", "Mysql", "Reactnative"]

cursos.map((el, chave)=>{
    const novoElemento= document.createElement("div");
    novoElemento.setAttribute("id","c"+ chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML= el

    caixa1.appendChild(novoElemento)
})
//set timeout****************************************************************************************************************
setTimeout(()=>{
    console.log("oque voce quer que ela execute")
},1000); //tempo em milisegundos
//set interval****************************************************************************************************
setInterval(()=>{
    console.log("sei la")
},1000)//parecido com o setTime out so que em ciclos

// remover elementos do dom**********************************************************************************************
removeChild

//filter**********************************************************************************************************
const idades=[14, 16, 23, 22,27,28 ,24 ,44, 15,13]
const idades_mais18= idades.filter((val,ind,arr)=>{
    if(val>=18){
        return val
    }
})
const idades_menor18=idades.filter((val,idc,arr)=>{
    if(val<18){
        return val
    }
})
//***************************************************************************************************** */

const arrey_slides=[...document.querySelectorAll(".slide")]

console.log(arrey_slides)
for(j=0; j<5; j++){
    
    setInterval(()=>{
    
        setTimeout(()=>{ 
            arrey_slides[0].classList.toggle("s1_hover")
        },20000)
        setTimeout(()=>{ 
            arrey_slides[1].classList.toggle("s2_hover")
        },15000)
        setTimeout(()=>{ 
            arrey_slides[2].classList.toggle("s3_hover")
        },10000)
        setTimeout(()=>{ 
            arrey_slides[3].classList.toggle("s4_hover")
        },5000)
           
    },15000)    
        
    
}

//adicionando elementos ao dom********************************************************************************.
const CdU= document.getElementById("CdU")
const click_photo_perfil=document.querySelector("#ph1")
const arrey_qualificaçoes=["aprovaçôes", "emprego", "almeja", "core"]
console.log(CdU)
console.log(click_photo_perfil)

click_photo_perfil.addEventListener("click", ()=>{
    console.log("dispara")
    arrey_qualificaçoes.map((el, chave)=>{
        const novo_elem_CdU= document.createElement("div")
        novo_elem_CdU.setAttribute("id", "cdu"+chave)
        novo_elem_CdU.setAttribute("class", "perfil_quali")
        novo_elem_CdU.innerHTML=el
        
        novo_elem_CdU.addEventListener("click",(evt)=>{
            CdU.removeChild(evt.target)
        })
        CdU.appendChild(novo_elem_CdU)
    })
})   

//inicio box de anotações*****************************************************************************************
//***************************************************************************************************************

const data = new Date()
const data_dia_com_zero=(data.getDate()>=10? data.getDate(): "0"+data.getDate())
const data_mes_com_zero=(data.getMonth()>=10? data.getMonth(): "0"+data.getMonth())                 //coloca hora e data
const data_minutos_com_zero=(data.getMinutes()>=10? data.getMinutes(): "0"+data.getMinutes())       //na anotação    
const data_horas_com_zero=(data.getHours()>=10? data.getHours(): "0"+data.getHours())


//cria a indentiicação da anotação******************************************************************************
const btn_adiciona_anotacao=[...document.querySelectorAll("#btn_adicionar_anotação_id")]
const titulo_anotação_arrey=[...document.querySelectorAll("input[type=text]")]
const texto_anotação_arrey=[...document.querySelectorAll("#area_texto_anotaçao_id")]
const box_ultimas_anotacoes=[...document.querySelectorAll("#box_ultimas_anotacoes_id")]
const btn_ryg_grau_importancia=[...document.querySelectorAll(".btn_class_em_comum_importancia")]
const box_color_quando_importancia_atv=[...document.querySelectorAll("#box_for_text_area_id")]
const bloqueia_text_area=[...document.querySelectorAll("#bloqueia_textarea_id")]

const remove_importancia_color=()=>{

    btn_ryg_grau_importancia.filter((ellem)=>{
        const ellem_ativado=ellem.className
       
       switch(ellem_ativado){
            case "importancia_cores_btn_red imo_cr_red_btn btn_class_em_comum_importancia atv_imo_red_btn":
                ellem.classList.remove("atv_imo_red_btn")
                break;
            case "importancia_cores_btn_green imo_cr_green_btn btn_class_em_comum_importancia atv_imo_green_btn":
                ellem.classList.remove("atv_imo_green_btn")    
                break;
            case "importancia_cores_btn_yellow imo_cr_yellow_btn btn_class_em_comum_importancia atv_imo_yellow_btn" :
                ellem.classList.remove("atv_imo_yellow_btn")
                break;     
       }
    })

    box_color_quando_importancia_atv.filter((elem)=>{
        const elem_ativado=elem.className
        
        switch(elem_ativado){
            case "box_for_text_area box_for_text_area_atv_for_red":
                elem.classList.remove("box_for_text_area_atv_for_red")
                break;
            case "box_for_text_area box_for_text_area_atv_for_green":
                elem.classList.remove("box_for_text_area_atv_for_green")
                break;
            case "box_for_text_area box_for_text_area_atv_for_yellow":
                elem.classList.remove("box_for_text_area_atv_for_yellow")
                break;        
        }
    })
}

const desbloqueio_temporario=()=>{
    
    bloqueia_text_area.filter((elem)=>{
        const des_temp_elem=elem.className

        if(des_temp_elem=="bloqueia_textarea_class desativa_bloqueia_textarea_class"){
            elem.classList.remove("desativa_bloqueia_textarea_class")
        }
    })
}


btn_ryg_grau_importancia.map((elem)=>{
    
    elem.addEventListener("click",(evt)=>{
            const chamada_remove_imporetancia_color=remove_importancia_color()
            const remove_temporariamente_odesbloqueio_area_tex=desbloqueio_temporario()
            const elem_evento=evt.target.id
            switch(elem_evento){
                case "imp_red_btn":
                    box_color_quando_importancia_atv[0].classList.toggle("box_for_text_area_atv_for_red")
                    bloqueia_text_area[0].classList.toggle("desativa_bloqueia_textarea_class")
                    elem.classList.toggle("atv_imo_red_btn")
                    break;
                case "imp_red_yellow":
                    box_color_quando_importancia_atv[0].classList.toggle("box_for_text_area_atv_for_yellow")
                    bloqueia_text_area[0].classList.toggle("desativa_bloqueia_textarea_class")
                    elem.classList.toggle("atv_imo_yellow_btn")

                    break;
                case "imp_green_btn":
                    box_color_quando_importancia_atv[0].classList.toggle("box_for_text_area_atv_for_green")
                    bloqueia_text_area[0].classList.toggle("desativa_bloqueia_textarea_class")
                    elem.classList.toggle("atv_imo_green_btn")
                    break;
            }

            btn_adiciona_anotacao[0].addEventListener("click",()=>{
        
                
                const cria_box_anotacoes=document.createElement("div")
                cria_box_anotacoes.setAttribute("class","box_anotacoes_feitas")
                
                btn_ryg_grau_importancia.filter((elem)=>{
                    const qual_cor_atv=elem.className
                    console.log(qual_cor_atv)

                    switch(qual_cor_atv){
                        case "importancia_cores_btn_red imo_cr_red_btn btn_class_em_comum_importancia atv_imo_red_btn":
                            cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_red_atv")
                            break;
                        case "importancia_cores_btn_yellow imo_cr_yellow_btn btn_class_em_comum_importancia atv_imo_yellow_btn":
                            cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_yellow_atv")
                            break;
                        case "importancia_cores_btn_green imo_cr_green_btn btn_class_em_comum_importancia atv_imo_green_btn":
                            cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_green_atv")
                            break;    
                    }
                })

                box_ultimas_anotacoes[0].appendChild(cria_box_anotacoes) 
                console.log(box_ultimas_anotacoes[0])
                const cria_box_titulo_in_anotacao=document.createElement("div")
                cria_box_titulo_in_anotacao.setAttribute("class","titulo_in_anotacao")
                cria_box_titulo_in_anotacao.setAttribute("id","titulo_in_anotacao_id")
                cria_box_titulo_in_anotacao.innerHTML=titulo_anotação_arrey[0].value
                cria_box_anotacoes.appendChild(cria_box_titulo_in_anotacao)

                const cria_box_hora_data_in_anotacao=document.createElement("div")
                cria_box_hora_data_in_anotacao.setAttribute("class","hora_data_anotacao")
                cria_box_hora_data_in_anotacao.setAttribute("id","hora_data_anotacao_id")
                cria_box_hora_data_in_anotacao.innerHTML=data_horas_com_zero+":"+data_minutos_com_zero+"   "+data_dia_com_zero+"/"+data_mes_com_zero+"/"+data.getUTCFullYear()
                cria_box_anotacoes.appendChild(cria_box_hora_data_in_anotacao)



            })
    })

})