#include <iostream>
using namespace std;

int fatorial(int num){
    int divide_5 = 0,divide_3 = 0, divide_2 = 0;

    if(num%2 == 0){
        for(int i = 0; i >= 0 ; i++){

            divide_2= num/2;
            num= divide_2;

            if(num%2 != 0 ){

                for(int k= 0 ; k <= i ; k++ ){
                    
                    cout<<"2"<<"x";
                };
                
            };
        };
    };

    return 0;
};

int main(){

    int num;
    cin>>num;
    fatorial(num);
    return 0;
}