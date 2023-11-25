var env;

switch (Cypress.env('ENVIRONMENT')) {
  case 'test':
    env = {
      login: 'login',
      atendimentos: 'atendimentos',
      regularizacao: 'regularizacao',
      home: '/',      
      api: 'https://sitcargaapitest'
    }


    break;
  case 'homolog':
    env = {
      login: 'login',
      atendimentos: 'atendimentos',
      regularizacao: 'regularizacao',
      home: '/',      
      api: 'https://sitcarga-api-homologacao.azurewebsites.net'
    }



    break;
  case 'webdev':
    env = {
      login: 'login',
      atendimentos: 'atendimentos',
      regularizacao: 'regularizacao',
      home: '/',      
      api: 'https://rui-api-dev.azurewebsites.net'
    }

    break;
  case 'dev':
    env = {
      login: 'login',
      atendimentos: 'atendimentos',
      regularizacao: 'regularizacao',
      home: '/',      
      api: 'http://localhost:9000/#/'
    }

    break;
  default:
    console.log('Ambiente não configurado')
    break;
}

module.exports = {
  login: env.login,
  atendimentos: env.atendimentos,
  regularizacao: env.regularizacao,
  home: env.home,  
  api: env.api
};