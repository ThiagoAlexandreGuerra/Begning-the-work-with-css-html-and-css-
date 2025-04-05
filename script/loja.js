const arrey_slides=[...document.querySelectorAll(".slide")]

console.log(arrey_slides)
for(j=0; j<5; j++){
    setInterval(()=>{
       setTimeout(()=>{ 
        arrey_slides[0].classList.toggle("s1_hover")
       },3000)
       setTimeout(()=>{ 
        arrey_slides[1].classList.toggle("s2_hover")
       },6000)
       setTimeout(()=>{ 
        arrey_slides[2].classList.toggle("s3_hover")
       },9000)
       setTimeout(()=>{ 
        arrey_slides[3].classList.toggle("s4_hover")
       },12000)
       
        
        
    },10000)
}
const endpoint="https://4c217282-4890-45db-b078-19607b715230-00-p3hj1apcwmrp.riker.replit.dev/"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})
