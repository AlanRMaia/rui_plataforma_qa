/// <reference types="Cypress"/>
describe('Suite de testes consulta a anuidades de advogados, referentes a inscrições ordinárias, suplementares ou de estagiários', () => {
    describe('Grupo de testes para verificar se todos os elementos estão disponíveis ao acessar a página', () => {
        it('O campo Nome deve estar disponível ao acessar a página conforme esperado', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo CPF deve estar disponível ao acessar a página conforme esperado', () => {
           //?Arrange
    
          //?Action
    
          //?Assert 
        });
        it('O campo Nº inscrição deve estar disponível ao acessar a página conforme esperado', () => {
            //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O campo Uf inscrição deve estar disponível ao acessar a página conforme esperado', () => {
            //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O campo Tipo inscrição deve estar disponível ao acessar a página conforme esperado', () => {
            //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O campo Seccional deve estar disponível ao acessar a página conforme esperado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O campo Ano referência deve estar disponível ao acessar a página conforme esperado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O campo Situação anuidade deve estar disponível ao acessar a página conforme esperado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O botão Limpar deve estar disponível ao acessar a página conforme esperado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O botão Pesquisar deve estar disponível ao acessar a página conforme esperado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('A tabela não deve estar disponível ao acessar a página', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('O botão Exportar não deve estar disponível ao acessar a página', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Controlador de páginas da tabela não deve estar disponível ao acessar a página', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
    });

    describe('Grupo de testes para verificar se os campos estão funcionais conforme suas funções', () => {
        it('O campo Nome deve estar funcional ativo e aceitando o preenchimento', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo CPF deve estar funcional ativo e aceitando o preenchimento', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo N° inscrição deve estar funcional ativo e aceitando o preenchimento', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo UF inscrição deve estar funcional selecionando uma UF da lista dropdown', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Tipo inscrição deve estar funcional selecionando um tipo da lista dropdown', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Seccional deve estar funcional selecionando um estado da lista dropdown', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Ano referência deve estar funcional selecionando um ano da lista dropdown', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Situação anuidade deve estar funcional selecionando uma situação da lista dropdown', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O botão Exportar deve estar funcional selecionando uma situação da lista dropdown', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O botão Limpar deve estar funcional ativo e limpando os campos preenchidos', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O botão Pesquisar deve estar funcional ativo e e carregando a tabela como resultado', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
    });

    describe('Grupo de testes para verificar a formatação e limite minimo e máximo de caracteres', () => {
        it('O campo Nome deve permitir no máximo 100 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Nome deve permitir o mínimo de 3 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo CPF deve conter 11 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Nº inscrição deve conter no máximo 7 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Nº inscrição deve conter no minimo 1 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo UF inscrição deve conter 2 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Tipo inscrição deve conter no mínimo 8 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Seccional deve conter no minimo 4 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Seccional deve conter no máximo 20 caracteres', () => {
            //?Arrange
            
           //?Action
    
           //?Assert
        });
        it('O campo Ano referência deve conter 4 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Situação anuidade deve conter no minimo 4 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });
        it('O campo Situação anuidade deve conter no máximo 7 caracteres', () => {
            //?Arrange
    
           //?Action
    
           //?Assert
        });

    });
});