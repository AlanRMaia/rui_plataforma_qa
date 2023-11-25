import path from "../../../selectors/path.sel.cy";
const faker = require('faker-br')
const formatarCPFCNPJ = require('../../../support/util/formatarCPFCNPJ')
require('cypress-xpath');

describe('Suite de testes para acesso', () => {
    beforeEach(() => {

    });

    it('campo CPF deve estar funcional', () => {
        //?Arrange
        const cpf = faker.br.cpf();      
        //*Action
        cy.visit('/');              
        cy.get(path.login.cpf).type(cpf);
        //!Assert
        cy.get(path.login.cpf).should('contain.value', formatarCPFCNPJ(cpf));
    });
    it('campo Senha deve estar funcional', () => {
        //?Arrange
        const senha = faker.internet.password();

        //*Action

        cy.visit('/');
        cy.get(path.login.senha).type(senha);
        cy.get('.q-icon').click();
        //!Assert
        cy.xpath('/html/body/div[1]/div/div/div/div/div[3]/form/label[2]/div/div/div[1]/input').should('contain.value', senha);
    });

    it('Imagem RUI no card de login deve estar conforme esperado', () => {
        //?Arrange        
        //*Action
        cy.visit('/');

        //!Assert
        cy.get('img[class=brand]').should('have.attr', 'src', '/assets/logo-rui.db37744b.svg')

    });

    it('Texto do titulo do card de login deve estar conforme esperado', () => {
        //*Action
        cy.visit('/');
        //!Assert
        cy.get('.q-card__section.text-center .text-bold').should('contain.text', 'Faça seu login')

    });
    it('A senha deve estar visivel ao clicar no icone de esconder a senha', () => {

        //*Action
        cy.visit('/');
        cy.get(path.login.senha).type(faker.internet.password())
        cy.get('.q-icon').click();
        //!Assert
        cy.get(path.login.senha).should('have.attr', 'type', 'text');       
        
    });
    it('A senha deve estar escondida quando o icone estiver com a classe "q-icon las la-eye cursor-pointer"', () => {
        //*Action
        cy.visit('/');
        cy.get(path.login.senha).type(faker.internet.password())
        cy.get('.q-icon').should('have.class', 'q-icon las la-eye cursor-pointer')

        //!Assert
        cy.get(path.login.senha).should('have.attr', 'type', 'password');        
    });


    it('Acesso efetuado com sucesso', () => {
       //?Arrange 
       //*Action 
       cy.login();       
       //!Assert
       cy.url().should('include', 'Home');
    });
    it('Acesso efetuado inválido', () => {
        //?Arrange
        let usuario = {
            cpf: '399.208.630-50',
            senha: 'a'
        };

        //*Action
        cy.login(usuario);
        
        //!Assert
        cy.get('.q-notification__message').should('contain.text', 'Usuário não encontrado.');
    });    
    
});