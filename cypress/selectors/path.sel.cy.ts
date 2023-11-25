module.exports = {
  generic: {
    mensagemNotificacao : '.q-notification__message',
    mensagemFechar: '.q-notification__actions > .q-btn > .q-btn__content > .q-icon',
    botaoConsultar:  '[data-cy=consultar]',
    botaoLimpar:  '[data-cy=limpar]'
  },
  login: {
    cpf: '[data-cy=cpf]',
    senha: '[data-cy=senha]',
    botaoEntrar: '[data-cy=entrar]'
  },

  home: {
    menuLateral: {
      lista: '[data-cy=listMenuLateral]',
      itens: '[data-cy=itemMenuLateral]'
    }
  },

  consultaAdvogados: {
    formularioCampos: '[data-cy=formularioCampos]',
   campoNome: '[data-cy=nome]',
   campoCPF:  '[data-cy=cpf]',
   campoNumeroInscricao: '[data-cy=numeroInscricao]',
   campoUFIncricao: '[data-cy=ufIncricao]',
   campoTipoInscricao: '[data-cy=tipoInscricao]',
   campoSituacao: '[data-cy=situacao]',
   campoSeccional: '[data-cy=seccional]',   
  }


}
