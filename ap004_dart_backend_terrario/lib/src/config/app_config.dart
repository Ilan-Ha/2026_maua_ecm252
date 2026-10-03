import 'env.dart';
class AppConfig{
  const AppConfig({
    required this.appEnv,
    required this.serverPort,
    required this.logLevel,
    required this.dbHost,
    required this.dbPort,
    required this.dbName,
    required this.dbUser,
    required this.dbPassword,
    required this.dbPoolSize
  });

  final String appEnv;
  final int serverPort;
  final String logLevel;

  final String dbHost;
  final int dbPort;
  final String dbName;
  final String dbUser;
  final String dbPassword;
  final int dbPoolSize;

  bool get producao => appEnv == 'production';

  //construtor nomeado (singleton)
  factory AppConfig.fromEnv(){
    final config = AppConfig(
      appEnv: Env.opcional('APP_ENV', 'development'),
      serverPort: Env.inteiro('SERVER_PORT', 8080),
      logLevel: Env.opcional('LOG_LEVEL', 'info'),
      dbHost: Env.obrigatoria('DB_HOST'),
      dbPort: Env.inteiro('DB_PORT', 3307),
      dbName: Env.obrigatoria('DB_NAME'),
      dbUser: Env.obrigatoria('DB_USER'),
      dbPassword: Env.obrigatoria('DB_PASSWORD'),
      dbPoolSize: Env.inteiro('DB_POOL_SIZE', 10)
    );

    if(config.serverPort < 1 || config.serverPort > 65535){
      throw StateError('SERVER_PORT fora da faixa válida: ${config.serverPort}');
    }
    if(config.dbPoolSize < 1){
      throw StateError('DB_POO_SIZE deve ser pelo menos 1');
    }
    return config;
  }

  @override
  String toString() {
    return 'AppConfig(appEnv: $appEnv, serverPort: $serverPort, db: $dbUser@$dbHost:$dbPort/$dbName, pool: $dbPoolSize)';
  }

}
