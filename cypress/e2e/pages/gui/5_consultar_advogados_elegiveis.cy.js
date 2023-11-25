
/// <reference types="Cypress"/>

describe('Suite de testes disponibilizar consulta a advogados elegíveis ao registro de inscrições  suplementares PARA que seja possível designá-los para notificação da necessidade de inscrição suplementar.', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    });
    
    describe.only('Grupo de testes para verificar se os elementos estão disponíveis na página', () => {
        
        it('Verificar se na página está disponível o campo Nome', () => {
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
            
          })          
          //*Assert
          cy.get('input.q-field__native.q-placeholder').each(($ele, index, $list)=>{
            let valor = $ele.attr('aria-label');
            cy.log('Valor:', valor)
            if ( valor === 'Nome') {
              expect(valor).to.be.eq('Nome')

              return false;
            }
          });
    
        });
        it('Verificar se na página está disponível o campo CPF', () => {
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
            
          })          
          //*Assert
          cy.get('input.q-field__native.q-placeholder').each(($ele, index, $list)=>{
            let valor = $ele.attr('aria-label');
            cy.log('Valor:', valor)
            if ( valor === 'CPF') {
              expect(valor).to.be.eq('CPF')

              return false;
            }
          });
        });
        it('Verificar se na página está disponível o campo N° Incrição', () => {
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
            
          })          
          //*Assert
          cy.get('input.q-field__native.q-placeholder').each(($ele, index, $list)=>{
            let valor = $ele.attr('aria-label');
            cy.log('Valor:', valor)
            if ( valor === 'Nº inscrição') {
              expect(valor).to.be.eq('Nº inscrição')

              return false;
            }
          });
        });
        it('Verificar se na página está disponível o campo UF Incrição', () => {
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();            
          })          
          //*Assert
          cy.get('input.q-select__focus-target').each(($ele, index, $list)=>{
            let valor = $ele.attr('aria-label');
            cy.log('Valor:', valor)
            if ( valor === 'UF Incrição') {
              expect(valor).to.be.eq('UF Incrição')
              return false;
            }
          });
        });
        it('Verificar se na página está disponível o campo Qtd mínima de processos', () => {
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
            
          })          
          //*Assert
          cy.get('input.q-field__native.q-placeholder').each(($ele, index, $list)=>{
            let valor = $ele.attr('aria-label');
            cy.log('Valor:', valor)
            if ( valor === 'Qtd mínima de processos') {
              expect(valor).to.be.eq('Qtd mínima de processos')
              return false;
            }
          });
        });
        it('Verificar se na página está disponível o campo Ano referência', () => {
           //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
            
          })          
          //*Assert
          cy.get('input.q-field__native.q-placeholder').each(($ele, index, $list)=>{
            let valor = $ele.attr('aria-label');
            cy.log('Valor:', valor)
            if ( valor === 'Ano referência') {
              expect(valor).to.be.eq('Ano referência')
              return false;
            }
          });
        });
        it('Verificar se na página está disponível o botão Limpar', () => {
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();            
          })  
          //*Assert
          cy.get('[type="reset"]').should('contain.text', 'Limpar')
        });
        it('Verificar se na página está disponível o botão Consultar', () => {          
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
            
          })  
          //*Assert
          cy.get('[type="submit"]').should('contain.text', 'Consultar')
        });
        it('A tabela da lista de advogados não deve estar disponível ao entrar na página', () => {
             
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();
            
          }) 
          //*Assert
          cy.get('table.q-table').should('not.exist')
        });
        it('Na tabela deve conter a coluna com o nome Advogado', () => {
           //*Arrange 
           cy.intercept('GET', 'gestao/advogados/elegiveis**').as('tabelaelegiveis')        
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();            
          }) 
          cy.get('[type=submit]').click();
          cy.wait('@tabelaelegiveis')
          //*Assert
          cy.get('.bg-grey-4 >').each(($tr)=> {
            let texto = $tr.text();
            cy.log('tr:', texto)
            if (texto === 'ADVOGADO') {
              expect(texto).to.be.eq('ADVOGADO')
              return false;
            }
          });
        });
        it('Na tabela deve conter a coluna com o nome CPF', () => {
          //*Arrange 
          cy.intercept('GET', 'gestao/advogados/elegiveis**').as('tabelaelegiveis')        
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();            
          }) 
          cy.get('[type=submit]').click();
          cy.wait('@tabelaelegiveis')
          //*Assert
          cy.get('.bg-grey-4 >').each(($tr)=> {
            let texto = $tr.text();
            cy.log('tr:', texto)
            if (texto === 'CPF') {
              expect(texto).to.be.eq('CPF')
              return false;
            }
          });
        });
        it('Na tabela deve conter a coluna com o nome N° Inscrição ordinária', () => {
          //*Arrange 
          cy.intercept('GET', 'gestao/advogados/elegiveis**').as('tabelaelegiveis')        
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();            
          }) 
          cy.get('[type=submit]').click();
          cy.wait('@tabelaelegiveis')
          //*Assert
          cy.get('.bg-grey-4 >').each(($tr)=> {
            let texto = $tr.text();
            cy.log('tr:', texto)
            if (texto === 'Nº INSCRIÇÃO ORDINÁRIA') {
              expect(texto).to.be.eq('Nº INSCRIÇÃO ORDINÁRIA')
              return false;
            }
          });
        });
        it('Na tabela deve conter a coluna com o nome Ano', () => {
          //*Arrange 
          cy.intercept('GET', 'gestao/advogados/elegiveis**').as('tabelaelegiveis')        
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();            
          }) 
          cy.get('[type=submit]').click();
          cy.wait('@tabelaelegiveis')
          //*Assert
          cy.get('.bg-grey-4 >').each(($tr)=> {
            let texto = $tr.text();
            cy.log('tr:', texto)
            if (texto === 'ANO') {
              expect(texto).to.be.eq('ANO')
              return false;
            }
          });
        });
        it('Na tabela deve conter a coluna com o nome Processos', () => {
          //*Arrange 
          cy.intercept('GET', 'gestao/advogados/elegiveis**').as('tabelaelegiveis')        
          //*Action
          cy.login();
          cy.get('div.q-list.q-list--dense.main-drawer-nav.q-mt-md').then(($ele) => {
            cy.wrap($ele).find('[href="#/consulta-advogados-elegiveis"]').click();            
          }) 
          cy.get('[type=submit]').click();
          cy.wait('@tabelaelegiveis')
          //*Assert
          cy.get('.bg-grey-4 >').each(($tr)=> {
            let texto = $tr.text();
            cy.log('tr:', texto)
            if (texto === 'PROCESSOS') {
              expect(texto).to.be.eq('PROCESSOS')
              return false;
            }
          });
        });
        it('Na tabela deve conter 7 colunas', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Na tabela deve conter um elemento para detalhar o advogado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Na tabela deve conter um elemento para marcar o advogado na tabela', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o botão Exportar está disponível após consulta, quando é retornado pelo menos um advogado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o botão Notificar está disponível após consulta, quando é retornado pelo menos um advogado', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });

        it('Verificar se é retornado na tabela a mensagem, registro não encontrado, quando não é encontrado registro', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
          });

    });

    describe('Grupo de testes para verificar se os campos estão respeitando a quantidade de caracteres esperado [RN005]', () => {
        it('Verificar se o campo Nome permite o preenchimento de no mínimo de 3 caracteres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o campo Nome permite o preenchimento de mais de 100 caracteres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o campo CPF permite o preenchimento mínimo de 11 caractéres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o campo CPF permite o preenchimento máximo de 11 caractéres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o campo Nº Inscrição permite o preenchimento mínimo de 1 caractérer', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o campo Nº Inscrição permite o preenchimento máximo de 7 caractéres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se o campo UF Inscricão permite o preenchimento mínimo de 2 caractéres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });

        it('Verificar se o campo Qtd mínima de processo permite o preenchimento máximo de no mínimo 6 caractéres', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
          });
    });

    describe('Grupo de testes verificar se o padrão dos campos da página estão conforme o esperado', () => {

        it('Verificar se o campo Nome está respeitando o padrão Alfanumérico(alfabéticos e numéricos)', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o campo CPF está respeitando o padrão de caracteres numéricos', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o campo CPF está respeitando o padrão de máscara correto', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o campo UF Inscricão está respeitando o padrão de seleção através de dropdown', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o campo Qtd mínima de processo está respeitando o padrão de formatação numérica', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o campo Ano referência está respeitando o padrão de seleção através de dropdown', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        
    });

    describe('Grupo de testes para verificar se as celulas da tabelas estão respeitando a quantidade de caracteres esperado [RN003] [RN005]', () => {
        it('Verificar se a celula da coluna Advogado está trazendo um nome com um minimo de 3 caracteres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se a celula da coluna Advogado está trazendo um nome com 100 caracteres [RN003]', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se a celula da coluna CPF está trazendo um CPF com 11 caracteres [RN003] [RN005] ', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        
        it('Verificar se a celula da coluna Nº Inscrição ordinária está trazendo a inscrição com 9 caracteres [RN003]', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });
        it('Verificar se a celula da coluna Ano está trazendo a data com 4 caracteres', () => {
          //?Arrange
    
          //?Action
    
          //?Assert
        });       

        
    });

    describe('Grupo de testes Verificar se o padrão das celulas da tabela estão conforme o esperado [RN003] [RN005]', () => {

        it('Verificar se o padrão das celulas da coluna Advogado está respeitando o padrão Alfanumérico(alfabéticos e numéricos)', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o padrão dos valores das celulas da coluna CPF estão com o padrão numéricos conforme esperado', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o padrão dos valores das celulas da coluna CPF estão com o padrão de máscara esperado', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o padrão dos valores das celulas da coluna Nº Inscrição ordinária está respeitando o padrão Alfanumerico', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o padrão dos valores das celulas da coluna Nº Inscrição ordinária está respeitando o padrão {uf}{numero de inscricao}', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });

        it('Verificar se o padrão dos valores das celulas da coluna Ano está respeitando o padrão numérico', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o padrão dos valores das celulas da coluna Ano está respeitando o padrão de mascara 0000', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Verificar se o padrão dos valores das celulas da coluna Processos está respeitando o padrão numérico', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        
    });

    describe('Grupo de teste para verificar se a label dos campos estão com seu nome conforme esperado', () => {
        it('Campo nome deve conter a label com o texto Nome', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Campo cpf deve conter a label com o texto CPF', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Campo Nº Inscrição deve conter a label com o texto Nº Inscrição', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Campo UF Inscricão deve conter a label com o texto UF Inscricão', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Campo Qtd mínima de processos deve conter a label com o texto Qtd mínima de processos', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
        it('Campo Ano referência deve conter a label com o texto Ano referência', () => {
            //?Arrange
      
            //?Action
      
            //?Assert
        });
    });
    
    describe('Grupo de testes regras de negócio [RN001, RN002, RN003, RN004]', () => {

        describe('Grupo de testes A opção "Limpar" quando acionada deverá limpar todos os campos editáveis e a lista do resultado de pesquisa [RN004]', () => {
            
            it('Botão limpar deve deixar o campo Nome em branco', () => {
                //?Arrange
          
                //?Action
          
                //?Assert
            });
            it('Botão limpar deve deixar o campo CPF em branco', () => {
                //?Arrange
          
                //?Action
          
                //?Assert
            });
            it('Botão limpar deve deixar o campo N° Inscrição em branco', () => {
                //?Arrange
          
                //?Action
          
                //?Assert
            });
            it('Botão limpar deve deixar o campo UF Inscrição em branco', () => {
                //?Arrange
          
                //?Action
          
                //?Assert
            });
            it('Botão limpar deve deixar o campo Qtd mínima de processo em branco', () => {
                //?Arrange
          
                //?Action
          
                //?Assert
            });
            it('Botão limpar deve deixar o campo Ano referência de processo em branco', () => {
                //?Arrange
          
                //?Action
          
                //?Assert
            });
        });

        describe('Grupo de testes relacionado a consulta', () => {
            
            it('Quando a consulta não trazer nenhum resultado o sistema deverá exibir mensagem de registro não encontrado (MSG101)', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('A consulta deve ser alinhada em ordem alfabética pelo nome do advogado', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta somente com o campo nome deve trazer advogados com o mesmo nome', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta somente com o campo CPF deve trazer um advogado com o mesmo CPF', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta somente com o campo Nº Inscrição deve trazer um advogado com o mesmo numero', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta somente com o campo UF Inscricão deve trazer advogados com inscrições nesse estado', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta somente com o campo Qtd mínima de processo deve trazer advogados com os mesmos numeros de processos', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta somente com o campo Ano referência deve trazer advogados dentro do ano selecionado', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta com todos os campos preenchidos corretamente deve trazer somente um advogado', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta com os campos CPF e N° Inscrição preenchidos corretamente devem trazer apenas um advogado', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });
            it('Consulta com os campos CPF e N° Inscrição preenchidos pertencendo a advogados diferentes o sistema deve exibir a mensagem "registro não encontrado" (MSG101)', () => {
                //?Arrange
              
                //?Action
              
                //?Assert
            });           

        });  
        
        describe('Grupo de testes para validar a janela de processos do advogado', () => {
            it('Nome do advogado selecionado deve ser o mesmo exibido na página', () => {
              //?Arrange
              
              //?Action
              
              //?Assert
            });
            it('N° de inscrição do advogado selecionado deve ser o mesmo exibido na página', () => {
              //?Arrange
              
              //?Action
              
              //?Assert
            });
            it('Lista de processos exibidos no grid devem corresponder ao advogado selecionado', () => {
              //?Arrange
              
              //?Action
              
              //?Assert
            });
        });
        
    });
    
})