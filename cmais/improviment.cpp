#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int n_notas_100(int valor){

    int quantdade_notas_100;
    quantdade_notas_100= (valor-(valor%100))/100;
    return quantdade_notas_100;
}
int resto_100(int valor){
    int resto_de_100, val1;
    val1=n_notas_100(valor);
    resto_de_100=valor-(val1*100);
    return resto_de_100;
}
int n_notas_50(int valor){

    float quantdade_notas_50;
    quantdade_notas_50= (valor-(valor%50))/50;
    return quantdade_notas_50;
}
int resto_50(int valor){
    int resto_de_50, val1;
    val1=n_notas_50(valor);
    resto_de_50=valor-(val1*50);
    return resto_de_50;
}
int n_notas_20(int valor){

    float quantdade_notas_20;
    quantdade_notas_20= (valor-(valor%20))/20;
    return quantdade_notas_20;
}
int resto_20(int valor){
    int resto_de_20, val1;
    val1=n_notas_20(valor);
    resto_de_20=valor-(val1*20);
    return resto_de_20;
}
int n_notas_10(int valor){

    int quantdade_notas_10;
    quantdade_notas_10= (valor-(valor%10))/10;
    return quantdade_notas_10;
}
int resto_10(int valor){
    int resto_de_10, val1;
    val1=n_notas_10(valor);
    resto_de_10=valor-(val1*10);
    return resto_de_10;
}
int n_notas_5(int valor){

    int quantdade_notas_5;
    quantdade_notas_5= (valor-(valor%100))/100;
    return quantdade_notas_5;
}
int resto_5(int valor){
    int resto_de_5, val1;
    val1=n_notas_5(valor);
    resto_de_5=valor-(val1*5);
    return resto_de_5;
}
int n_notas_2(int valor){

    int quantdade_notas_2;
    quantdade_notas_2= (valor-(valor%2))/2;
    return quantdade_notas_2;
}
int resto_2(int valor){
    int resto_de_2, val1;
    val1=n_notas_2(valor);
    resto_de_2=valor-(val1*2);
    return resto_de_2;
}

void meu_troco(int valor){
    float val1, val2;
    
    if(valor>100){
        
        val1=n_notas_100(valor);
        cout<<"resposta:"<<val1<<" de 100";
        val2=resto_100(valor);

        if(val2>50){
        val1=n_notas_50(valor);
        cout<<","<<val1<<" de 50";
        val2=resto_50(valor);
        }

        if(val2>20){
        val1=n_notas_20(valor);
        cout<<","<<val1<<" de 20";
        val2=resto_20(valor);
        }

        if(val2>10){
        val1=n_notas_10(valor);
        cout<<","<<val1<<" de 10";
        val2=resto_10(valor);
        }

        if(val2>5){
        val1=n_notas_5(valor);
        cout<<","<<val1<<" de 5";
        val2=resto_5(valor);
        }

        if(valor>2){
        val1=n_notas_2(valor);
        cout<<","<<val1<<" de 2";
        val2=resto_2(valor);
        }
    } 
}

int main(){

int troco, valor;
cin>>valor;
meu_troco(valor)
}