sealed class ErrorApp implements Exception{
  final String mensagem;
  const ErrorApp(this.mensagem);

  @override
  String toString() => '$runtimeType: $mensagem';
}

class NaoEncontrado extends ErrorApp{
  // NaoEncontrado(String mensagem){
  //   super(mensagem);
  // }
  const NaoEncontrado(super.mensagem);
}

//422
class ErroValidacao extends ErrorApp{
  const ErroValidacao(super.mensagem, [this.campos = const {}]);
  final Map<String, String> campos;  
}

//409 Conflict (conflito com o estado atual da aplicação)
class Conflito extends ErrorApp{
  const Conflito(super.mensagem);
}

//400
class RequisicaoInvalida extends ErrorApp{
  const RequisicaoInvalida(super.mensagem);
}