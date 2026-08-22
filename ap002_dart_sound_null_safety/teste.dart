import 'dart:io'; // -> stdin e stdout
// stdin por padrão é o teclado
// stdout por padrão é a tela
// no java tem system.in e system.out



// void main(){
//     stdout.writeln("Digite seu nome: ");
//     var nome = stdin.readLineSync();
//     stdout.write("olá, $nome\n");
    
//     // manipulação do valor null
    
//     String? idadeTextual = stdin.readLineSync();
//     if(idadeTextual != null){
//         int idade = int.parse(idadeTextual);
//     } 
//     // ou
//     /*
//     while(idadeTextual == null){
//         idadeTextual = stdin.readLineSync();
//     }
//     int idade = int.parse(idadeTextual);
//      */

//     //print("Hello, Dart");
// }