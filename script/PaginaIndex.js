const receitas=["receitaFeijoada",
                "receitaFarofa",
                "receitaPeixe",
                "receitaSalada",
                "receitaSobremesa"                
]
const pratos= [...receitas]
const pagina = document.querySelector("#pagina_r")
const btn_home =[...document.querySelectorAll("#H_1")]

btn_home.map((el)=>{
    el.addEventListener("click" , (evt)=>{
            
        function* valores(){
            let i=0
            while(true){
               yield i= i+1
            }
        }

        const numEl=valores()
        const numElemnto=numEl.next().value
        console.log(numElemnto)

            const evento= evt.target
            pratos.map((elem , chave)=>{
   
                    const adiciona_receita= document.createElement("div")
                    adiciona_receita.setAttribute("id","Re"+ chave)
                    adiciona_receita.setAttribute("class", "pag")
                    pagina.appendChild(adiciona_receita)
                
                    
                    let Apresentar_receita=receitas[numElemnto]
                    
                setTimeout(()=>{
                    adiciona_receita.innerHTML=Apresentar_receita
                },2000);    
                
            })
    
    })
})
const Acion_botoes= [...document.querySelectorAll(".botoes")]
const Action_box_quentions_a= document.querySelectorAll("#a")
const Action_box_quentions_b= document.querySelectorAll("#b")
const Action_box_quentions_c= document.querySelectorAll("#c")
const Action_box_quentions_d= document.querySelectorAll("#d")
const Action_box_quentions_e= document.querySelectorAll("#e")
const Action_responder=[...document.querySelectorAll("#responder")]

const Fun_resp=()=>{Action_responder.map((elem)=>{
    elem.classList.toggle("ativado_responder")
})}

Acion_botoes.map((ellem)=>{
        
            ellem.addEventListener("click",(evt,)=>{
            const ativado= evt.target
            ativado.classList.toggle("ativado")
            const resposta_green= Fun_resp()
            
            
        })
    })        
/*****************************full screen home************************************************************************/
var elem= document.documentElement
const elem_tela_cheia=document.querySelector(".full")
console.log(elem_tela_cheia)

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

let i= 1;

elem_tela_cheia.addEventListener("click",(evt)=>{
    ++i
    console.log(i)
    if(i%2==0){
        const F= openFullscreen()
    }else{
        const M=closeFullscreen()
    }
})

//guarda**************************************************************************************************************
const Fun_resp=()=>{
  Action_responder.map((elem)=>{
  elem.classList.toggle("ativado_responder_btn")
})}

const ativa_btn_a_resp=(chave)=>{
  const atv_resp=Fun_resp()
  Action_box_quentions_a[0].classList.toggle("ativado")
}
const par_ou_impar_func_a=(int_a)=>{
let num_a=int_a
console.log(num_a)
}


const remove_who_be_atv_for_a=(val)=>{
  const who_is_active=[...document.querySelectorAll(".ativado")]
  const val_btn_a= val
  const tamanho_do_arrey=who_is_active.length
  
  
  if(val_btn_a==3456){
      console.log(who_is_active[0])
      who_is_active[0].classList.toggle("ativado")
  }else{
      console.log("nao fuviona")
  }

}
const ativa_btn_b_resp=()=>{
  const atv_resp=Fun_resp()
  Action_box_quentions_b[0].classList.toggle("ativado")
}
//eventos de ativação**********************************************************
Action_box_quentions_a.map((el, chave)=>{
  console.log(chave)
  const jesus=chave+3456
  let i=0
  el.addEventListener("click", ()=>{
      i++
      const par_ou_impar_atv=par_ou_impar_func_a(i)
      const atva=remove_who_be_atv_for_a(jesus)
      const atva_atv=ativa_btn_a_resp()
     

  })
})
Action_box_quentions_b.map((el, chave)=>{
  const chave_b= chave+1
  console.log(chave_b)
  el.addEventListener("click", ativa_btn_b_resp)
})

