/// <reference types="Cypress"/>

describe('Suite de testes disponibilizar consulta a processos vinculados a um advogado PARA que uma lista dos processos vinculados a um advogado seja apresentada às seccionais', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)        
    });
    
    describe('Suite de testes para verificar se os elementos estão sendo exibidos na página conforme esperado', () => {        
        it('O nome do advogado selecionado deve está disponível no topo da janela', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O N° de inscrição do advogado deve estar logo a baixo do nome do advogado', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O campo Seccional deve estar disponível na página', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O campo Tribunal deve estar disponível na página', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O campo Ano deve estar disponível na página', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O botão Limpar deve estar disponível na página', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O botão Pesquisar deve estar disponível na página', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O botão Pesquisar deve estar disponível na página', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('A tabela de resultado de pesquisa não deve estar disponível assim que a página é acessada', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('Controlador de abas da tabela não deve estar disponível assim que a página é acessada', () => {
            //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('A tabela deve estar disponível caso o resultado da pesquisa retorne algum resultado', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('Na tabela deve ser exibido a coluna de nome Processo', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('Na tabela deve ser exibido a coluna de nome Tribunal', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('Na tabela deve ser exibido a coluna de nome Inscrição', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('Na tabela deve ser exibido a coluna de nome Último expediente', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('A baixo da tabela deve ser apresentado o controlado de abas da lista', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('O botão Exportar deve estar disponível na página assim que a tabela for exibida', () => {
             //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('As células da coluna Processo deve trazer um valor caso a consulta retorne um resultado', () => {
            //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('As células da coluna Tribunal deve trazer um valor caso a consulta retorne um resultado', () => {
            //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('As células da coluna Inscrição deve trazer um valor caso a consulta retorne um resultado', () => {
            //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('As células da coluna Último expediente deve trazer um valor caso a consulta retorne um resultado', () => {
            //?Arrange
              
            //?Action
              
            //?Assert
        });
        it('A tabela deve retornar uma mensagem que Registro não encontrado quando a pesquisa não retorna valor', () => {
            //?Arrange
              
            //?Action
              
            //?Assert
        });       


    });

    describe('Grupo de testes para verificar se os campos (dropdown) estão contendo todos os valores esperados', () => {
        it('Campo Seccional deve trazer todos os Estados do Brasil', () => {
            //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('Campo Tribunal deve trazer todos os dados esperados', () => {
            //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('Campo Ano deve trazer todos os dados esperados', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
       });
    });

    describe('Verificar se os botões dessa página estão funcionais', () => {
        it('O botão Limpar deve limpar o conteúdo do campo Seccional', () => {
            //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('O botão Limpar deve limpar o conteúdo do campo Tribunal', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('O botão Limpar deve limpar o conteúdo do campo Ano', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('O botão Exportar deve deve gerar uma planilha com o resultado da pesquisa dos processos', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('O botão Pesquisa deve exibir uma tabela com dados quando ela retorna algum valor', () => {
            //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('O botão Pesquisa deve exibir uma tabela informando de registro não encontrado quando a pesquisa não retorna valor', () => {
            //?Arrange
             
           //?Action
             
           //?Assert
       });
    });    

    describe('Grupo de testes de formatação e quantidade máxima e mínima permitida das célular da tabela do retorno da pesquisa dos processos', () => {
        it('Valor da célular da coluna Processos deve possuir caracteres do tipo numérico', () => {
            //?Arrange
             
           //?Action
             
           //?Assert
       });
        it('Valor da célular da coluna Processos deve possuir caracteres do tipo numérico', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
       });

       it('Valor da célular da coluna Processos deve possuir a quantidade de 20 caracteres', () => {
         //?Arrange
           
         //?Action
         
         //?Assert
       });
       it('Valor da célular da coluna Processos deve seguir o padrão {número do processo}.{}.{}.{}.{}.{}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('Valor da célular da coluna Processos deve seguir o padrão {}.{dígitos verificadores}.{}.{}.{}.{}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('Valor da célular da coluna Processos deve seguir o padrão {}.{}.{ano}.{}.{}.{}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('Valor da célular da coluna Processos deve seguir o padrão {}.{}.{}.{órgão}.{}.{}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('Valor da célular da coluna Processos deve seguir o padrão {}.{}.{}.{}.{tribuna}.{}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('Valor da célular da coluna Processos deve seguir o padrão {}.{}.{}.{}.{}.{fórum}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('Valor da célular da coluna Processos deve seguir a seguinte formatação de máscara NNNNNNN-DD.AAAA.J.TR.OOOO', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Processos, o número sequencial inicial do processo deve seguir o padrão de unidade de origem e deve ser reiniciado a cada ano', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Processos, número sequencial DD do processo deve seguir o padrão de 2 dígitos verificadores da integridade do número, calculados a partir de todos os demais dígitos', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Processos, número sequencial AAAA do processo deve seguir o padrão de 4 dígitos que indicadores do ano da autuação', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Processos, número sequencial J do processo deve ser o indicador do segmento do Judiciário a que pertence o processo', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Processos, número sequencial TR do processo deve ser o indicador que identifica o tribunal ou conselho do segmento do Poder Judiciário a que pertence o processo', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Processos, número sequencial OOOO do processo deve ser o indicador dígitos identificadores da unidade de origem do processo, seguindo regras diversas para cada um dos segmentos do Judiciário', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Tribunal deve possuir o máximo de 100 caracteres', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Tribunal deve respeitar a formatação de digitos alfanuméricos', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Inscrição deve respeitar a quantidade máxima de 9 caracteres', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Inscrição deve respeitar a formatação alfanumérica', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Inscrição deve respeitar a formatação de máscara AA0000000', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Inscrição deve respeitar a formatação {uf}{número da inscrição}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Inscrição deve respeitar a formatação {uf}{}', () => {
           
        //?Arrange
        
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Inscrição deve respeitar a formatação {}{número da inscrição}', () => {
           
        //?Arrange
           
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Ultimo expediente deve respeitar a quantidade de no máximo 8 caracteres', () => {
           
        //?Arrange
           
        //?Action
         
        //?Assert
       });
       it('O Valor da célular da coluna Ultimo expediente deve respeitar a formatação de data 00/00/0000', () => {
           
        //?Arrange
           
        //?Action
         
        //?Assert
       });
       it('O valor do campo Seccional deve conter no máximo de 20 caracteres', () => {
           
        //?Arrange
           
        //?Action
         
        //?Assert
       });
       it('O valor do campo Seccional deve conter no mínimo de 4 caracteres', () => {
           
        //?Arrange
           
        //?Action
         
        //?Assert
       });
       it('O valor do campo Tribunal deve conter 100 caracteres', () => {
           
        //?Arrange
           
        //?Action
         
        //?Assert
       });
       it('O valor do campo Ano deve conter 4 caracteres', () => {
           
        //?Arrange
           
        //?Action
         
        //?Assert
       });
    });

    describe('Casos de testes página Consultar processos Advogados ', () => {
        it('O campo Seccional deve ser preenchido automaticamente pelo sistema quando o advogado pertencer a uma Seccional', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('O campo Seccional não deve ser preenchido automaticamente pelo sistema quando o advogado não pertencer a uma Seccional', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('O campo Ano é preenchido automaticamente quando a origem da pesquisa está relacionada a um ano específico', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('O campo Ano não deve ser preenchido automaticamente quando a pesquisa não está relacionada a um ano específico', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('Efetuando a pesquisa somente com o campo Seccional preenchido o resultado deve conter somente processos da Seccional selecionada', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('Efetuando a pesquisa somente com o campo Seccional preenchido, onde não deve retornar processos o sistema deve apresentar uma mensagem que o registro não foi encontrado', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('Efetuando a pesquisa somente com o campo Tribunal preenchido o resultado deve conter somente processos da Tribunal selecionada', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('Efetuando a pesquisa somente com o campo Tribunal preenchido, onde não deve retornar processos o sistema deve apresentar uma mensagem que o registro não foi encontrado', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('Efetuando a pesquisa somente com o campo Ano preenchido o resultado deve conter somente processos da Ano selecionada', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('Efetuando a pesquisa somente com o campo Ano preenchido, onde não deve retornar processos o sistema deve apresentar uma mensagem que o registro não foi encontrado', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });
        it('A pesquisa deve seguir uma ordem cronológica relacionada ao Ultimo expediente', () => {
           //?Arrange
             
           //?Action
             
           //?Assert
        });

    });
    
});