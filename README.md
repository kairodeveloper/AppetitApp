# AppetitApp

## Simples app para registro de pedidos em uma cafeteria!

### Aplicação JS, programada com o framework React Native

**Passo a passo para a execução do App**
* Possuir o npm, node e react-native instalados
* Clonar o projeto deste repositório
* Abra o projeto, antes de executá-lo, rode o comando _npm install_
* Após concluído o processo anterior, conecte um dispositivo Android ou IOS (Somente macbook), e rode o comando _react-native start_
* Por último, rode o comando _react-native run-android_ ou _react-native run-ios_
* Pronto


**Informações técnicas do projeto**
* O projeto possui 7 _components_:
  * _DetalhesProduto.js_
    > Tela que detalha a quantidade e o tipo do produto que está sendo requerido pelo cliente.
  * _Login.js_
    > Tela de.... login.
  * _MenuEndProduto.js_
    > Tela de menu final, é onde o usuário decide se cadastra um novo pedido, ou se volta pra ver os pedidos existentes.
  * _NovoPedidoPrimeiraEtapa.js_
    > Primeira tela de um novo pedido, onde são selecionados os produtos.
  * _NovoPedidoSegundaEtapa.js_
    > Segunda tela de um novo pedido, onde são selecionados os clientes.
  * _NovoPedidoUltimaEtapa.js_
    > Terceira e última tela de um novo pedido, onde são informados os dados de: status de pagamento, e data de pagamento.
  * _PedidosList.js_
    > Lista os pedidos já feitos.
    
**Items que faltam implementar**
* Separação total de código de lógica (back) e código de design (front)
* Melhoria de código
* Implementação de classes de objetos para banco de dados
* Finalização de funcionalidades, bem como, a melhoria no fluxo de navegação
  
