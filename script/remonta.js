
//full screen***************************************************************************************************************
const fullscreenButton = document.getElementById("fullscreenButton");
var elem= document.documentElement

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

fullscreenButton.addEventListener("click",(evt)=>{
    ++i
    console.log(i)
    if(i%2==0){
        const F= openFullscreen()
    }else{
        const M=closeFullscreen()
    }
})
//ativa botoes do console com as alternativas************************************************************************
//**************************************************************************************************************** */

const Acion_botoes= [...document.querySelectorAll(".botoes")]                   //arreys de  indentificação
const Action_box_quentions_A= [...document.querySelectorAll("#a")]              //de teclas, inputs e feedbacks
const Action_box_quentions_b= [...document.querySelectorAll("#b")]              //de resposta
const Action_box_quentions_c= [...document.querySelectorAll("#c")]
const Action_box_quentions_d= [...document.querySelectorAll("#d")]
const Action_box_quentions_e= [...document.querySelectorAll("#e")]
const Action_responder=[...document.querySelectorAll("#responder")]
const btn_chequed=[...document.querySelectorAll("input[type=radio]")]

//feedback de seleção das alternativas**********************************************
const ativa_btn_a_resp=()=>{
    Action_box_quentions_A[0].classList.toggle("ativado")
}
const ativa_btn_b_resp=()=>{
    Action_box_quentions_b[0].classList.toggle("ativado")
}
const ativa_btn_c_resp=()=>{
    Action_box_quentions_c[0].classList.toggle("ativado")
}
const ativa_btn_d_resp=()=>{
    Action_box_quentions_d[0].classList.toggle("ativado")
}
const ativa_btn_e_resp=()=>{
    Action_box_quentions_e[0].classList.toggle("ativado")
}
//feedback de ativaçao do btn resposta e se a resposta esta certa ou errada********
const ativa_botao_responder=()=>{
    Action_responder[0].classList.toggle("ativado_responder_btn")
}
const resposta_green_func=()=>{
    Action_responder[0].classList.toggle("resposta_correta_green")
}
const resposta_orange_func=()=>{
    Action_responder[0].classList.toggle("resposta_correta_orange")
}

//evento de click e seleçao de quais funçoes serão chamadas de acordo com o btn acionado**

let h=0; //variavel para contar numero 
        //de vezes que o evento foi selecionado

btn_chequed.map((elem,chave)=>{
    elem.addEventListener("click",(evt)=>{
        
        Acion_botoes.filter((elem)=>{
           
            const aativ=elem.className
            if(aativ=="botoes ativado" || aativ=="botoes certa ativado"){
                elem.classList.toggle("ativado")
            }
        })
       
        const botao_selecionado=btn_chequed.filter((elem, indice, arrey)=>{
            const abcdoue=evt.target.id
           switch(abcdoue){
            case "btn_a":
            const atv_btn_a=ativa_btn_a_resp()
                break;
            case "btn_b":
                const atv_btn_b=ativa_btn_b_resp()
                break;
            case "btn_c":
                const atv_btn_c=ativa_btn_c_resp()
                break; 
            case "btn_d":
                const atv_btn_d=ativa_btn_d_resp()
                break; 
            case "btn_e":
                const atv_btn_e=ativa_btn_e_resp()
                break; 
                          
           }
            return elem.checked
            
        })
        if(botao_selecionado != null  && h==0){
            const Action_responder=[...document.querySelectorAll("#responder")]
            Action_responder[0].classList.toggle("ativado_responder_btn")
            ++h
        }
    })
})
//questao certa ou errada********************************************************
Action_responder[0].addEventListener("click",()=>{
    const resp_correta_ou_errada=Acion_botoes.filter((elem,indice,arrey)=>{
        const resp_c_ou_e=elem.className
        console.log(resp_c_ou_e)
        if(resp_c_ou_e=="botoes certa ativado"){
            const r_c_ou_e=resposta_green_func()
        }else if(resp_c_ou_e=="botoes ativado"){
            const r_c_ou_ee=resposta_orange_func()
            console.log("chegou aqui")
        }
    }) 
})
//texto para as questoe****************************************************************************************
const texto_para_questoes=document.getElementById("texto_questao_id")
const proximo= document.querySelector("#proximo")
const anterior=document.querySelector("#anterior")
        
const funx_bota_texto=()=>{        
        
        
        k++    
        const proxima_questao= document.createElement("iframe")
        proxima_questao.setAttribute("src","/pagina/texto_questao_"+k+".html")
        proxima_questao.setAttribute("class", "qst")
        texto_para_questoes.appendChild(proxima_questao)
        const ultimo_questao=evt.target
        
}       
const funx_tira_texto=()=>{


        --k
        const  elem_text_arrey=[...document.getElementsByClassName("qst")]
        texto_para_questoes.removeChild(elem_text_arrey[k])
        
}

let k=0;
proximo.addEventListener("click", funx_bota_texto)
anterior.addEventListener("click", funx_tira_texto)

//console principal anotações***********************************************
const btn_console_principal_anotacao_atv_arrey=[...document.querySelectorAll("#btn_anotacao_console_principal")]
const box_for_anotacao_space_arrey=[...document.querySelectorAll("#box_for_anotacoes_space_id")]

btn_console_principal_anotacao_atv_arrey[0].addEventListener("click", ()=>{
    box_for_anotacao_space_arrey[0].classList.toggle("box_for_anotacoes_space_atv")
})


//inicio box de anotações*****************************************************************************************
//***************************************************************************************************************

let data = new Date()
let data_dia_com_zero=(data.getDate()>=10? data.getDate(): "0"+data.getDate())
let data_mes_com_zero=(data.getMonth()>=10? data.getMonth(): "0"+data.getMonth())                 //coloca hora e data
let data_minutos_com_zero=(data.getMinutes()>=10? data.getMinutes(): "0"+data.getMinutes())       //na anotação    
let data_horas_com_zero=(data.getHours()>=10? data.getHours(): "0"+data.getHours())
let data_segundo_com_zero=(data.getSeconds()>=10?data.getSeconds(): "0"+data.getSeconds())


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

        })
    })           


let R=0;
let Y=0; 
let G=0;           
btn_adiciona_anotacao[0].addEventListener("click",(evt)=>{
                
    btn_ryg_grau_importancia.map((elem)=>{
        const se_btn_imp_atv=elem.className
    
        if((se_btn_imp_atv=="importancia_cores_btn_red imo_cr_red_btn btn_class_em_comum_importancia atv_imo_red_btn" 
            || se_btn_imp_atv=="importancia_cores_btn_yellow imo_cr_yellow_btn btn_class_em_comum_importancia atv_imo_yellow_btn" 
            || se_btn_imp_atv=="importancia_cores_btn_green imo_cr_green_btn btn_class_em_comum_importancia atv_imo_green_btn") 
            && titulo_anotação_arrey[0].value !=0){        
                
            const cria_box_anotacoes=document.createElement("div")
            cria_box_anotacoes.setAttribute("class","box_anotacoes_feitas")
            cria_box_anotacoes.setAttribute("id","box_anotacoes_feitas_id")
                
            btn_ryg_grau_importancia.filter((elem)=>{
                const qual_cor_atv=elem.className
                    

                    switch(qual_cor_atv){
                        case "importancia_cores_btn_red imo_cr_red_btn btn_class_em_comum_importancia atv_imo_red_btn":
                            
                            ++R
                            if(R==1){
                                cria_box_anotacoes.classList.toggle("elemento_referencia")
                            }
                            cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_red_atv")
                            break;
                        case "importancia_cores_btn_yellow imo_cr_yellow_btn btn_class_em_comum_importancia atv_imo_yellow_btn":

                            ++Y
                            if(Y==1){
                                cria_box_anotacoes.classList.toggle("elemento_referencia")
                            }
                            cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_yellow_atv")
                            break;
                        case "importancia_cores_btn_green imo_cr_green_btn btn_class_em_comum_importancia atv_imo_green_btn":

                            ++G
                            if(G==1){
                                cria_box_anotacoes.classList.toggle("elemento_referencia")
                            }
                            cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_green_atv")
                            break;    
                    }
            })

            box_ultimas_anotacoes[0].appendChild(cria_box_anotacoes) 
                
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
            
            const anotacoes_feitas_pelo_usuario=[...document.querySelectorAll("#box_anotacoes_feitas_id")]
            console.log(anotacoes_feitas_pelo_usuario[0].className)
            anotacoes_feitas_pelo_usuario.map((elem)=>{
                elem.addEventListener("click",()=>{
                    console.log("funcionou")
                    elem.classList.toggle("ativado_anotacao_for_idn_edit")
    
                })
                
            })
            const anotaçao_edit_box_atv_arrey=[...document.querySelectorAll("#box_para_texto_anotacao_edit_id")] 
            const editar_btn_console_anotacao=[...document.querySelectorAll("#btn_editar_anotacoes_id")]
            const slide_for_anotacoes_box=[...document.querySelectorAll("#box_slide_for_text_anotacao_edtit_id")]   

            editar_btn_console_anotacao[0].addEventListener("click",(evt)=>{
                
                const anotacoes_feitas_pelo_usuario=[...document.querySelectorAll("#box_anotacoes_feitas_id")]
                
                anotacoes_feitas_pelo_usuario.filter((elem)=>{
                    
                    const se_elemento_ativado_pelo_edit=elem.className
                    if(se_elemento_ativado_pelo_edit=="box_anotacoes_feitas elemento_referencia box_anotacoes_feitas_quando_imp_red_atv ativado_anotacao_for_idn_edit" ){
                        const elem_titulo= elem.firstChild.textContent.text()
                        
                        const elem_data=elem.lastChild.innerHTML

                        const adiciona_titulo_da_tag_anotacao=[...document.querySelectorAll(".box_in_anotacao_slide_titulo_titulo")]
                        adiciona_titulo_da_tag_anotacao.innerHTML=elem_titulo
                        console.log(elem_data)
                        console.log(elem_titulo)
                    }
                })
                       
                    console.log(evt.target)
                    setTimeout(()=>{
                        anotaçao_edit_box_atv_arrey[0].classList.toggle("box_para_texto_anotacao_edit_atv")
                        slide_for_anotacoes_box[0].classList.toggle("box_slide_for_text_anotacao_edtit_atv")
                        console.log("ue")
                    },8800000)
                    
        
            })

        }    
    })        
})

const anotaçao_edit_box_atv_arrey=[...document.querySelectorAll("#box_para_texto_anotacao_edit_id")] 
const editar_btn_console_anotacao=[...document.querySelectorAll("#btn_editar_anotacoes_id")]
const slide_for_anotacoes_box=[...document.querySelectorAll("#box_slide_for_text_anotacao_edtit_id")]   

editar_btn_console_anotacao[0].addEventListener("click",()=>{
    anotaçao_edit_box_atv_arrey[0].classList.toggle("box_para_texto_anotacao_edit_atv")
    setTimeout(()=>{
    slide_for_anotacoes_box[0].classList.toggle("box_slide_for_text_anotacao_edtit_atv")
    console.log("ue")
    },200)
})

//inicio do menu lateral DIREITO que erroneamente eu chamei de esquerdo*****************************************
//**************************************************************************************************************


//arreys para iterar com os elementos do dom********************************************************************
const ativa_menu_lateral_esquerda_box_arrey=[...document.querySelectorAll(".icone_box")]
const btn_conhecimentos_bancarios=[...document.querySelectorAll("#cbb")]
const btn_vendas_negociacoes=[...document.querySelectorAll("#vnb")]
const btn_legislacoes=document.querySelectorAll("#lgb")
const btn_tecnologia_informacao=[...document.querySelectorAll("#tib")]
const btn_comportamentos_complaice=[...document.querySelectorAll("#cpb")]
const btn_conhecimentos_digitais=[...document.querySelectorAll("#cdb")]
const ativa_slide_menu_lateral_esquerdo_horizontal_cb=[...document.querySelectorAll("#cb_bsm_horizontal")]
const ativa_slide_menu_lateral_esquerdo_vertical_cb=[...document.querySelectorAll("#cb_bsm_vertical")]
const ativa_slide_menu_lateral_esquerdo_cb=[...document.querySelectorAll("#cb_bsm")]
const ativa_slide_menu_lateral_esquerdo_vn=[...document.querySelectorAll("#vn_bsm")]
const ativa_slide_menu_lateral_esquerdo_cd=[...document.querySelectorAll("#cd_bsm")]
const ativa_slide_menu_lateral_esquerdo_ti=[...document.querySelectorAll("#ti_bsm")]
const ativa_slide_menu_lateral_esquerdo_lg=[...document.querySelectorAll("#lg_bsm")]
const ativa_slide_menu_lateral_esquerdo_cp=[...document.querySelectorAll("#cp_bsm")]
const box_full_slide_lateral_esqueerdo=[...document.querySelectorAll(".box_slide_full_menu_lateral")]
const Ativa_esmaecer_tela_quando_btn_ativo= [...document.querySelectorAll("#esmaecer_id")]


//funções que modificão o arrey********************************************************************************
const ativa_red_cb=()=>{
    btn_conhecimentos_bancarios[0].classList.toggle("ativado_menu_lateral_direito")
}
const ativa_red_vn=()=>{
    btn_vendas_negociacoes[0].classList.toggle("ativado_menu_lateral_direito")
}
const ativa_red_lg=()=>{
    btn_legislacoes[0].classList.toggle("ativado_menu_lateral_direito")
}
const ativa_red_cp=()=>{
    btn_comportamentos_complaice[0].classList.toggle("ativado_menu_lateral_direito")
}
const ativa_red_cd=()=>{
    btn_conhecimentos_digitais[0].classList.toggle("ativado_menu_lateral_direito")
}
const ativa_red_ti=()=>{
    btn_tecnologia_informacao[0].classList.toggle("ativado_menu_lateral_direito")
}
const ativa_slide_menu_lateral_esquerdo_horizontal=()=>{
    ativa_slide_menu_lateral_esquerdo_horizontal_cb[0].classList.toggle("atv_box_slide_menu_horizontal")
}
const ativa_slide_menu_lateral_esquerdo_vertical=()=>{
    ativa_slide_menu_lateral_esquerdo_vertical_cb[0].classList.toggle("atv_box_slide_menu_vertical")
}
const ativa_slide_menu_lateral_esquerdo=()=>{
    ativa_slide_menu_lateral_esquerdo_cb[0].classList.toggle("atv_box_slide_full_menu_lateral")
}
const ativa_slide_menu_lateral_esquerdo_vnn=()=>{
    ativa_slide_menu_lateral_esquerdo_vn[0].classList.toggle("atv_box_slide_full_menu_lateral")
}
const ativa_slide_menu_lateral_esquerdo_cdd=()=>{
    ativa_slide_menu_lateral_esquerdo_cd[0].classList.toggle("atv_box_slide_full_menu_lateral")
}
const ativa_slide_menu_lateral_esquerdo_tii=()=>{
    ativa_slide_menu_lateral_esquerdo_ti[0].classList.toggle("atv_box_slide_full_menu_lateral")
}
const ativa_slide_menu_lateral_esquerdo_lgg=()=>{
    ativa_slide_menu_lateral_esquerdo_lg[0].classList.toggle("atv_box_slide_full_menu_lateral")
}
const ativa_slide_menu_lateral_esquerdo_cpp=()=>{
    ativa_slide_menu_lateral_esquerdo_cp[0].classList.toggle("atv_box_slide_full_menu_lateral")
}

//funções de desativação previa para posterior ativação********************************************************

//função para desativar o botao ativado no menu lateral esquerdo
const remove_btn_ativavado_menu_lateral_esquerdo=()=>{
    ativa_menu_lateral_esquerda_box_arrey.filter((elem)=>{
        const who_atv=elem.className

        if(who_atv=="icone_box ativado_menu_lateral_direito" || who_atv=="icone_box primeiro ativado_menu_lateral_direito"){
            elem.classList.toggle("ativado_menu_lateral_direito")
        }
    })

}

//remove slide lateral esquerdo antes do proximo ser ativado***
const remove_slide_menu_lateral_esquerdo=()=>{

    box_full_slide_lateral_esqueerdo.filter((elem)=>{
        const full_slide_indentificacao=elem.className
        console.log(full_slide_indentificacao)

        if(full_slide_indentificacao=="box_slide_full_menu_lateral atv_box_slide_full_menu_lateral"){
            elem.classList.toggle("desativa")
            const atv_sl_me_lt_vert=ativa_slide_menu_lateral_esquerdo_horizontal()
            const atv_sl_me_lt_hrz=ativa_slide_menu_lateral_esquerdo_vertical()   
        }else if(full_slide_indentificacao=="box_slide_full_menu_lateral desativa"){
            elem.classList.toggle("desativa")
            
        }
    })
}

const coloca_esmaecer_tela_quando_btn_ativo=()=>{
    Ativa_esmaecer_tela_quando_btn_ativo[0].classList.add("atv_esmacer_class")

   
}
const remove_esmaecer_tela_quando_btn_atv=()=>{

    Ativa_esmaecer_tela_quando_btn_ativo[0].classList.remove("atv_esmacer_class")
}

let contador=0

let vn=1    //variaveis
let cb=1    //para contar o numero
let ti=1    //de vezes que um botão foi
let cd=1    //apertado
let lg=1
let cp=1

//eventos e seleção de chamada das funções esperadas***********************************************************
ativa_menu_lateral_esquerda_box_arrey.map((el)=>{
    
    el.addEventListener("click",(evt)=>{

        const o_evento=evt.target.id
        const remove_slide_menu_lateral_esquerdo_r=remove_slide_menu_lateral_esquerdo()
        const remover_ativados_btn=remove_btn_ativavado_menu_lateral_esquerdo()
        
        
        
        switch(o_evento){
            case "cb":
                ++cb
                if(cb%2==0){
                    
                    coloca_esmaecer_tela_quando_btn_ativo()
                    
                    const atv_btn_cb=ativa_red_cb()
                }else{
                    remove_esmaecer_tela_quando_btn_atv()
                    const atv_sl_me_lt_vert=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz=ativa_slide_menu_lateral_esquerdo_vertical()
                }
                    const atv_sl_me_lt_vert=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz=ativa_slide_menu_lateral_esquerdo_vertical()
                    const atv_sl_full_me_lt=ativa_slide_menu_lateral_esquerdo()
                    
                    break;
                    case "vn":
                        ++vn
                if(vn%2==0){
                    
                    coloca_esmaecer_tela_quando_btn_ativo()

                    const atv_btn_vn=ativa_red_vn()
                }else{
                    remove_esmaecer_tela_quando_btn_atv()
                    
                    const atv_sl_me_lt_vert_vn=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz_vn=ativa_slide_menu_lateral_esquerdo_vertical()
                }
                    const atv_sl_me_lt_vert_vn=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz_vn=ativa_slide_menu_lateral_esquerdo_vertical()
                    const atv_sl_full_me_lt_vn=ativa_slide_menu_lateral_esquerdo_vnn()
                    break;  
            case "ti":
                ++ti
                if(ti%2==0){
                    
                    coloca_esmaecer_tela_quando_btn_ativo()

                    const atv_btn_ti=ativa_red_ti()
                }else{
                    remove_esmaecer_tela_quando_btn_atv()
                    
                    const atv_sl_me_lt_vert_ti=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz_ti=ativa_slide_menu_lateral_esquerdo_vertical()
                }
                const atv_sl_me_lt_vert_ti=ativa_slide_menu_lateral_esquerdo_horizontal()
                const atv_sl_me_lt_hrz_ti=ativa_slide_menu_lateral_esquerdo_vertical()
                    const atv_sl_full_me_lt_ti=ativa_slide_menu_lateral_esquerdo_tii()
                break;
            case "cd":
                ++cd
                if(cd%2==0){
                    
                    coloca_esmaecer_tela_quando_btn_ativo()
                    
                    const atv_btn_cd=ativa_red_cd()
                }else{
                    
                    remove_esmaecer_tela_quando_btn_atv()

                    const atv_sl_me_lt_vert_cd=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz_cd=ativa_slide_menu_lateral_esquerdo_vertical()
                }
                const atv_sl_me_lt_vert_cd=ativa_slide_menu_lateral_esquerdo_horizontal()
                const atv_sl_me_lt_hrz_cd=ativa_slide_menu_lateral_esquerdo_vertical()
                const atv_sl_full_me_lt_cd=ativa_slide_menu_lateral_esquerdo_cdd()
                break;
                case "cp":
                    ++cp
                if(cp%2==0){
                    
                    coloca_esmaecer_tela_quando_btn_ativo()

                    const atv_btn_cp=ativa_red_cp()
                }else{
                    
                    remove_esmaecer_tela_quando_btn_atv()

                    const atv_sl_me_lt_vert_cp=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz_cp=ativa_slide_menu_lateral_esquerdo_vertical()
                }    
                    const atv_sl_me_lt_vert_cp=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz_cp=ativa_slide_menu_lateral_esquerdo_vertical()
                    const atv_sl_full_me_lt_cp=ativa_slide_menu_lateral_esquerdo_cpp()
                    break;
                    case "lg":
                ++lg
                if(lg%2==0){
                    coloca_esmaecer_tela_quando_btn_ativo()
                    
                    const atv_btn_lg=ativa_red_lg()
                }else{
                    
                    remove_esmaecer_tela_quando_btn_atv()

                    const atv_sl_me_lt_vert_lg=ativa_slide_menu_lateral_esquerdo_horizontal()
                    const atv_sl_me_lt_hrz_lg=ativa_slide_menu_lateral_esquerdo_vertical()
                }
                const atv_sl_me_lt_vert_lg=ativa_slide_menu_lateral_esquerdo_horizontal()
                const atv_sl_me_lt_hrz_lg=ativa_slide_menu_lateral_esquerdo_vertical()
                    const atv_sl_full_me_lt_lg=ativa_slide_menu_lateral_esquerdo_lgg()
                    break;                  
                }
                
                
            })

})
//fim do menu lateral direito***************************************************************************************