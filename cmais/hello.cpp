#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;
char funcãoplura(int valorx)
{
char nota,notas;
if(valorx<2){cout<<" nota";}else{cout<<" notas";}
}
int fal1(int valor)
{
    int val5,val6,val7,val8,val9,val10,val11,resto1,resto2,resto3,resto4,resto5,resto6,resto7; 
    val5= valor/100;
    resto1= valor - val5*100;
    val6= resto1/50; 
    resto2= resto1 - val6*50;
    val7= resto2/20;
    resto3= resto2 - val7*20;
    val8= resto3/10;
    resto4= resto3 - val8*10;
    val9= resto4/5;
    resto5= resto4 - val9*5;
    val10= resto5/2;
    resto6= resto5 - val10*2;
    val11=resto6/1;
    resto7= resto6 - val11*1;
     if(resto7<1){cout<<"Resposta: "<< val5<< funcãoplura(val5)<<" de 100, "<< val6 << funcãoplura(val6)<< " de 50, "
    << val7<< funcãoplura(val7)<< " de 20, "<< val8<<funcãoplura(val8)<< " de 10, "<< val9<< funcãoplura(val9)<<" de 5 e "
    <<val10<< funcãoplura(val10)<< " de 2 e "<<val11<<funcãoplura(val11)<<" de 1." ;} else{"ai eu que não vou fazer os centavos";}
   return 0; 
}
int fal2(int valor)
{
   int val5,val6,val7,val8,val9,val10,resto1,resto2,resto3,resto4,resto5,resto6; 
    val5= valor/100;
    resto1= valor - val5*100;
    val6= resto1/50; 
    resto2= resto1 - val6*50;
    val7= resto2/20;
    resto3= resto2 - val7*20;
    val8= resto3/10;
    resto4= resto3 - val8*10;
    val9= resto4/5;
    resto5= resto4 - val9*5;
    val10= resto5/2;
    resto6= resto5 - val10*2;
   if(resto6<1){cout<<"Resposta: "<< val5<< funcãoplura(val5)<<" de 100, "<< val6 << funcãoplura(val6)<< " de 50, "
    << val7<< funcãoplura(val7)<< " de 20, "<< val8<<funcãoplura(val8)<< " de 10, "<< val9<< funcãoplura(val9)<<" de 5 e "
    <<val10<< funcãoplura(val10)<< " de 2." ;} else{fal1(valor);}
   return 0;
}
int fal5(int valor)
{
    int val5,val6,val7,val8,val9,resto1,resto2,resto3,resto4,resto5;
    val5= valor/100;
    resto1= valor - val5*100;
    val6= resto1/50; 
    resto2= resto1 - val6*50;
    val7= resto2/20;
    resto3= resto2 - val7*20;
    val8= resto3/10;
    resto4= resto3 - val8*10;
    val9= resto4/5;
    resto5= resto4 - val9*5;
    if(resto5<1){cout<<"Resposta: "<< val5<< funcãoplura(val5)<<" de 100, "<< val6 << funcãoplura(val6)<< " de 50, "
    << val7<< funcãoplura(val7)<< " de 20, "<< val8<<funcãoplura(val8)<< " de 10, "<< val9<< funcãoplura(val9)<<" de 5," ;} else{fal2(valor);}
   return 0;
}
int fal10(int valor)
{
    int val5,val6,val7,val8,resto1,resto2,resto3,resto4;
    val5= valor/100;
    resto1= valor - val5*100;
    val6= resto1/50; 
    resto2= resto1 - val6*50;
    val7= resto2/20;
    resto3= resto2 - val7*20;
    val8= resto3/10;
    resto4= resto3 - val8*10;
    if(resto4<1){cout<<"Resposta: "<< val5<< funcãoplura(val5)<<" de 100, "<< val6 << funcãoplura(val6)<< " de 50, "
    << val7<< funcãoplura(val7)<< " de 20, "<< val8<<funcãoplura(val8)<< " de 10, " ;} else{fal5(valor);}
   return 0;
}
int fal20(int valor)
{
    int val6,val5,val7,resto3,resto2,resto1;
    val5= valor/100;
    resto1= valor - val5*100;
    val6= resto1/50; 
    resto2= resto1 - val6*50;
    val7= resto2/20;
    resto3= resto2 - val7*20;
    if(resto3<1){cout<<"Resposta: "<< val5<< funcãoplura(val5)<<" de 100, "<< val6 << funcãoplura(val6)<< " de 50, "
    << val7<< funcãoplura(val7)<< " de 20, " ;} else{fal10(valor);}
   return 0;
    
    
    
}
int fal50(int valor)
{
    int val6, resto2,val5,resto1;
    val5= valor/100;
    resto1= valor - val5*100;
    val6= resto1/50; 
    resto2= resto1 - val6*50;
     if(resto2<1){cout<<"Resposta: "<< val5<< funcãoplura(val5)<<" de 100 e "<< val6 << funcãoplura(val6)<< " de 50";} else{fal20(valor);}
   return 0;
    
    
}
int fal100(int valor)
{
    int val5, resto1;
    val5= valor/100;
    resto1= valor - val5*100;
    if(resto1<1){cout<<"Resposta: "<< val5<<funcãoplura(val5)<<" de 100";} else{fal50(valor);}
   return 0;
    
}

int main()
{
   int val2, val4;
   cin>>val2;
   val4= fal100(val2);
   return 0;
}
