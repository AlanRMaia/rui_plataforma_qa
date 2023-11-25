// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import path from "../../selectors/path.sel.cy";

Cypress.Commands.add('login', (usuario = Cypress.env('usuario')) => {
    // cy.session(usuario, () => {
      cy.intercept('POST', '/acesso/identity/login').as('loginacesso')
      cy.visit('/', {timeout: 20000});
    
      cy.get(path.login.cpf, {timeout:20000}).type(usuario.cpf);
      cy.get(path.login.senha).type(usuario.senha, {log: false});
      cy.get(path.login.botaoEntrar).click({force: true});        
      cy.wait('@loginacesso', {timeout: 90000});
  
      //cy.get(path.generic.title, {timeout: 20000}).should('have.text', ' Consultar Atendimentos ');
    // },
    // {cacheAcrossSpecs: true}
    // )  
  });

  Cypress.Commands.add('notificacao', (mensagem, arquivo) => {
    if (typeof arquivo === "undefined") {
      cy.get(path.generic.mensagemNotificacao, {timeout: 20000}).should('be.visible').then((element) => {
        cy.get(path.generic.mensagemNotificacao).should('be.visible')
        expect(mensagem).to.be.contains(element.text())
        cy.get(path.generic.mensagemFechar).wait(1000).click({multiple: true});      
      }     
    )
    } else {
      const caminho = require('path')
      cy.get(path.generic.mensagemNotificacao, {timeout: 20000}).should('be.visible').then((element) => {
        cy.get(path.generic.mensagemNotificacao).should('be.visible')      
        expect(`Arquivo ${caminho.basename(arquivo)} ${mensagem}`).to.be.contains(element.text())
        cy.get(path.generic.mensagemFechar).wait(1000).click({multiple: true});      
      }     
    )
    }
    
  })

  Cypress.Commands.add('opcaoMenuLateral', (href) => {
    //passar o href para encontrar a opção desejada. Exp. #/consulta-advogados
    cy.get(path.home.menuLateral.lista).then(($ele) => {
      cy.wrap($ele).find(path.home.menuLateral.itens).each(($item, index, $list) => {
        let key = $item.attr('href')
        cy.log('Valor key:', key)
        if (key === href) {
          cy.wrap($item).click()
           return false;
        }
      }) 
    })          

  })
  Cypress.Commands.add('validarCampoInputDisponivel', (campo) => {
    //passar o nome do campo  
    let valor = 'Valor não encontrado'
    cy.get("input.q-field__native.q-placeholder").each(($ele) => {
      valor = $ele.attr("aria-label");
      cy.log("Valor:", valor);
      if (valor === campo) {
        expect(valor).to.be.eq(campo);
        return false;
      }
    });         
    expect(valor).to.be.eq(campo);

  })