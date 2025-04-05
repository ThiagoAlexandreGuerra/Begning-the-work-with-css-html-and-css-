//relojo na tela do display principal***********************************************************
//**********************************************************************************************
const horas_para_relogio=[...document.querySelectorAll("#relojoid_hora")] ; 
const minutos_para_relojo=[...document.querySelectorAll("#relojoid_minutos")];
const segundos_para_relojo=[...document.querySelectorAll("#relojoid_segundos")];

const relogio= setInterval(function time(){
    let datatoday= new Date()
    let hr = datatoday.getHours()
    let min = datatoday.getMinutes()
    let seg = datatoday.getSeconds()

    let data_minutos_com_zero=(datatoday.getMinutes()>=10? datatoday.getMinutes(): "0"+datatoday.getMinutes())       //na anotação    
    let data_horas_com_zero=(datatoday.getHours()>=10? datatoday.getHours(): "0"+datatoday.getHours())
    let data_segundo_com_zero=(datatoday.getSeconds()>=10?datatoday.getSeconds(): "0"+datatoday.getSeconds())

    horas_para_relogio[0].textContent = data_horas_com_zero+":";
    minutos_para_relojo[0].textContent = data_minutos_com_zero+":";
    segundos_para_relojo[0].textContent = data_segundo_com_zero;
})
//cronometro**************************************************************************
//************************************************************************************


const seg_for_crono_elem=document.getElementById("crono_id_seg")
const min_for_crono_elem=document.getElementById("crono_id_min")
const hora_for_crono_elem=document.getElementById("crono_id_hora")

const converter=(seg)=>{
    let hora= Math.floor(seg/3600)
    let resto= seg%3600;
    let minuto= Math.floor(resto/60)
    let segundo=Math.floor(resto%60)
    let form= (hora<10? "0"+hora: hora)+":"+(minuto<10?"0"+minuto: minuto)+":"+(segundo<10?"0"+segundo: segundo)
    return form
}

let intervalo= null
let temp_inicio=null

const conometro=()=>{
    let temp_atual= Date.now()
    let diferenca_atual_inicial= temp_atual-temp_inicio;
    let seg_for_crono=Math.floor( (temp_atual-temp_inicio)/1000);
    let timer=converter(seg_for_crono)
    seg_for_crono_elem.textContent=timer
}


const btn_parar_crono_elem=document.getElementById("btn_dispara_crono_parar") 
const btn_iniciar_crono_elem=document.getElementById("btn_dispara_crono_iniciar") 

//slide relojo aparece conometro*****************************

const btn_atv_slide_conometro=document.getElementById("btn_img_atv_cronometro")
const slide_relojo_atv= document.getElementById("box_relojoclass_id")
let conta_n_press_btn_cronometro=0
btn_atv_slide_conometro.addEventListener("click",()=>{
    
    let temp_inicio= Date.now();
    let intervalo=setInterval(conometro,1000)       

        if(conta_n_press_btn_cronometro%2 == 0){
            slide_relojo_atv.classList.toggle("atv_relojo_slide_conometro")
        }else{
           slide_relojo_atv.classList.remove("atv_relojo_slide_conometro")
        }
        ++conta_n_press_btn_cronometro
     //   setTimeout(()=>{
       //     slide_relojo_atv.classList.remove("atv_relojo_slide_conometro")
       // },10000)
    
})

