import 'package:ap003_dart_colecoes/ap003_dart_colecoes.dart' as ap003_dart_colecoes;
import 'dart:io';
void exibeMenu(){
  print('\n|---------Menu----------|');
  print('| 1 - Novo Contato      |');
  print('| 2 - Ver Contatos      |');
  print('| 3 - Atualizar Contato |');
  print('| 4 - Remover Contato   |');
  print('| 5 - Sair              |');
  print('|-----------------------|');

}
String perguntaValor(String? variavel, String texto){
  do{
      stdout.write(texto);
      variavel = stdin.readLineSync();
    }while(variavel == null || variavel.isEmpty);
  return variavel;
}
void opcoes(int op, Map<String,String> lista){
  switch (op) {
    case 1:
      String? nome, fone;
      nome = perguntaValor(nome, 'Nome: ').toLowerCase();
      fone = perguntaValor(fone, 'Fone: ');
      lista.addAll({nome:fone});
      break;
    case 2:
      for(MapEntry entry in lista.entries){
        print(entry);
      }
      break;
    case 3:
      
      break;
    case 4:
      
      break;
    default:
  }
}
void main(List<String> arguments) {

  var contatos = <String,String>{};
  int opcao = 0;
  String? resp;
  String aux;
  bool respValido;
  var entradasValidas = {'1','2','3','4','5'};
  do {
    respValido = false;
    aux = '';
    do {
      exibeMenu();
      stdout.write("\nDigite uma das opções acima: ");
      resp = stdin.readLineSync();
      if (resp != null){
        if( resp.isNotEmpty){
          aux = resp.substring(0,1);
          for(String valores in entradasValidas){
            if(aux == valores){
              respValido = true;
              break;
            }

          }
        }
      }
    } while (!respValido);
    opcao = int.parse(aux);
    if(opcao == 5){
      break;
    }
    opcoes(opcao,contatos);
  } while (opcao != 5);

  // lista de contatos
  // contato possui nome e número de telefone
  // CRUD
  // mapa
  // menu 1-C 2-R 3-U- 4-D 5-Sair
  // chave valor nome contato - número

  
  // mapas
  // var pessoa = <String,dynamic>{
  //   'nome':'Ana'
  // };

  // // for (String key in pessoa.keys){
  // //   print(key);
  // //   print(pessoa[key]);
  // // }

  // for (final entry in pessoa.entries){
  //   print(pessoa[entry.key]);
  // }
  // var nome = pessoa['nome'];
  // var pessoa = {
  //   'nome': 'Ana',
  //   1: 'oi'
  // };
  
  // print(pessoa['nome']);
  // print(pessoa[1]);

  // var pessoa = {
  //   'nome': 'Ana',
  //   'idade': 18,
  //   'altura': 1.8,
  // };

  // var lembretes = {
  //   1: 'comprar café'
  // };

  // uniião, intersecção, diferença
  // var A = {1,2,3,4,5,6};
  // var B = {1,3,7};
  // print(A.union(B));
  // print(B.union(A));
  // print(A.intersection(B));
  // print(B.intersection(A));
  // print(A.difference(B));
  // print(B.difference(A));

  // final numeros = {1,2};
  // // for each
  // for(final numero in numeros){
  //   print(numero);
  // }
  
  // set: sem elementos duplicados e sem ordem
  //{}: set e map
  //var a = {'a','b','A'};
  // var a = <String> {}; // set
  // var b = <String, int> {};
  // tuplas
  // var tupla = ('Ana', 18, true);
  // print(tupla.$1);

  // var l6 = [1,1.1,true];

  // var l4 = [1, null]; // List<int?>
  // var l5 = [null]; // List<Null>

  // type annotation
  // var l3 = <int>[];

  // sound null safety
  // List<String?>? l2 = ['A'];
  // final letras  = ['A','B'];
  // letras[0] = 'C';  // Pode (altera variavel de referencia)
  // letras.add('J');  // Pode (altera variavel de referencia)
  // print(letras);  // funciona em tempo de compilação e execução
  //letras = ['X'];   // Não Pode (altera para qual variavel aponta)
  //var letras = ['A','B'];
  //print(arguments);
}
