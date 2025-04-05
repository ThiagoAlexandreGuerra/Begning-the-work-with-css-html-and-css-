const carrocel_caixas_para_mover=[...document.querySelectorAll(".caixa_que_guardao_os_pdfs_em_oferta")]

const movimenta_slides=()=>{

    

        setInterval(()=>{
            for(i=0 ; i<3 ; i++){

                carrocel_caixas_para_mover[i].toggle("move_oferta_in_slide")
                console.log("cachorro")
            }
        },8000)

}