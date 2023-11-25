/// <reference types="Cypress"/>
import path from "../../../selectors/path.sel.cy";
describe("(#3-Melhoria-#233) Suite de teste consultar dados de advogados dados cadastrais de um determinado advogado PARA disponibilizar os dados consultados para ações posteriores", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  describe.only("Grupo de testes para verificar se os elementos estão disponíveis na página", () => {
    it("Verificar se na página está disponível o campo Nome", () => {
      //*Arrage
      cy.intercept('GET', 'gestao/seccionais/resumo').as('resumo')

      //*Action
      cy.login();

      cy.opcaoMenuLateral("#/consulta-advogados");

      //*Assert
      cy.wait('@resumo')
      cy.validarCampoInputDisponivel('Nome')
    });
    it("Verificar se na página está disponível o campo CPF", () => {
      //*Arrage
      cy.intercept('GET', 'gestao/seccionais/resumo').as('resumo')
      //*Action
      cy.login();
      cy.opcaoMenuLateral('#/consulta-advogados')
      //*Assert
      cy.wait('@resumo')
      cy.validarCampoInputDisponivel('CPF')
    });
    it("Verificar se na página está disponível o campo N° Incrição", () => {
      //*Arrage
      cy.intercept('GET', 'gestao/seccionais/resumo').as('resumo')
      //*Action
      cy.login();
      cy.opcaoMenuLateral('#/consulta-advogados')
      //*Assert
      cy.wait('@resumo')
      cy.validarCampoDisponivel('N° Incrição')
    });
    it.only("Verificar se na página está disponível o campo UF Incrição", () => {
      //*Arrage
      cy.intercept('GET', 'gestao/seccionais/resumo').as('resumo')
      //*Action
      cy.login();
      cy.opcaoMenuLateral('#/consulta-advogados')
      //*Assert
      cy.wait('@resumo')
      cy.validarCampoDisponivel('UF Incrição')
    });
    it("Verificar se na página está disponível o campo Qtd mínima de processos", () => {
      //*Arrage
      cy.intercept('GET', 'gestao/seccionais/resumo').as('resumo')
      //*Action
      cy.login();
      cy.opcaoMenuLateral('#/consulta-advogados')
      //*Assert
      cy.wait('@resumo')
      cy.validarCampoInputDisponivel('Qtd mínima de processos')
    });
    it("Verificar se na página está disponível o campo Ano referência", () => {
      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      //*Assert
      cy.get("input.q-field__native.q-placeholder").each(($ele) => {
        let valor = $ele.attr("aria-label");
        cy.log("Valor:", valor);
        if (valor === "Ano referência") {
          expect(valor).to.be.eq("Ano referência");
          return false;
        }
      });
    });
    it("Verificar se na página está disponível o botão Limpar", () => {
      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      //*Assert
      cy.get('[type="reset"]').should("contain.text", "Limpar");
    });
    it("Verificar se na página está disponível o botão Consultar", () => {
      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      //*Assert
      cy.get('[type="submit"]').should("contain.text", "Consultar");
    });
    it("A tabela da lista de advogados não deve estar disponível ao entrar na página", () => {
      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      //*Assert
      cy.get("table.q-table").should("not.exist");
    });
    it("Na tabela deve conter a coluna com o nome Advogado", () => {
      //*Arrange
      cy.intercept("GET", "gestao/advogados/elegiveis**").as("tabelaelegiveis");

      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      cy.get("[type=submit]").click();
      cy.wait("@tabelaelegiveis");

      //*Assert
      cy.get(".bg-grey-4 >").each(($tr) => {
        let texto = $tr.text();
        cy.log("tr:", texto);
        if (texto === "ADVOGADO") {
          expect(texto).to.be.eq("ADVOGADO");
          return false;
        }
      });
    });
    it("Na tabela deve conter a coluna com o nome CPF", () => {
      //*Arrange
      cy.intercept("GET", "gestao/advogados/elegiveis**").as("tabelaelegiveis");

      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      cy.get("[type=submit]").click();
      cy.wait("@tabelaelegiveis");

      //*Assert
      cy.get(".bg-grey-4 >").each(($tr) => {
        let texto = $tr.text();
        cy.log("tr:", texto);
        if (texto === "CPF") {
          expect(texto).to.be.eq("CPF");
          return false;
        }
      });
    });
    it("Na tabela deve conter a coluna com o nome N° Inscrição ordinária", () => {
      //*Arrange
      cy.intercept("GET", "gestao/advogados/elegiveis**").as("tabelaelegiveis");

      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      cy.get("[type=submit]").click();
      cy.wait("@tabelaelegiveis");

      //*Assert
      cy.get(".bg-grey-4 >").each(($tr) => {
        let texto = $tr.text();
        cy.log("tr:", texto);
        if (texto === "Nº INSCRIÇÃO ORDINÁRIA") {
          expect(texto).to.be.eq("Nº INSCRIÇÃO ORDINÁRIA");
          return false;
        }
      });
    });
    it("Na tabela deve conter a coluna com o nome Ano", () => {
      //*Arrange
      cy.intercept("GET", "gestao/advogados/elegiveis**").as("tabelaelegiveis");

      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      cy.get("[type=submit]").click();
      cy.wait("@tabelaelegiveis");

      //*Assert
      cy.get(".bg-grey-4 >").each(($tr) => {
        const texto = $tr.text();
        cy.log("tr:", texto);
        if (texto === "ANO") {
          expect(texto).to.be.eq("ANO");
          return false;
        }
      });
    });
    it("Na tabela deve conter a coluna com o nome Processos", () => {
      //*Arrange
      cy.intercept("GET", "gestao/advogados/elegiveis**").as("tabelaelegiveis");
      //*Action
      cy.login();
      cy.get("div.q-list.q-list--dense.main-drawer-nav.q-mt-md").then(
        ($ele) => {
          cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
        }
      );
      cy.get("[type=submit]").click();
      cy.wait("@tabelaelegiveis");
      //*Assert
      cy.get(".bg-grey-4 >").each(($tr) => {
        let texto = $tr.text();
        cy.log("tr:", texto);
        if (texto === "PROCESSOS") {
          expect(texto).to.be.eq("PROCESSOS");
          return false;
        }
      });
    });
    it("Na tabela deve conter 7 colunas", () => {
      //?Arrange
      //?Action
      //?Assert
    });
    it("Na tabela deve conter um elemento para detalhar o advogado", () => {
      //?Arrange
      //?Action
      //?Assert
    });
    it("Na tabela deve conter um elemento para marcar o advogado na tabela", () => {
      //?Arrange
      //?Action
      //?Assert
    });
    it("Verificar se o botão Exportar está disponível após consulta, quando é retornado pelo menos um advogado", () => {
      //?Arrange
      //?Action
      //?Assert
    });
    it("Verificar se o botão Notificar está disponível após consulta, quando é retornado pelo menos um advogado", () => {
      //?Arrange
      //?Action
      //?Assert
    });

    it("Verificar se é retornado na tabela a mensagem, registro não encontrado, quando não é encontrado registro", () => {
      //?Arrange
      //?Action
      //?Assert
    });
  });
});
