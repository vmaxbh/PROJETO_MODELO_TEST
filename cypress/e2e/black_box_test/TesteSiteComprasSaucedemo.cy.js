describe('Teste Site de Compra Saucedemo', () => {
  beforeEach(() => {
    cy.login()
    
  });

  it('Teste login', () => {
    cy.login()
  });

  it('Teste etapas de compra', () => {
    cy.EscolhradeProdutosdoSite()
    cy.AcessoCarrinhoCompras()
    cy.RemoverPartedeProdutos()
    cy.Checkout()
    cy.CadastroCompras()
    cy.FinalizandoCompra()
    cy.logout()
  });
  it('Teste validações de Produtos', () => {
    cy.ValidProdutos()
    cy.ValidPreco()
    cy.ValidAnuncio()
    cy.ValidImagensProduto()
  });

  it('Teste Navegação Menu', () => {
    cy.ValidMenuSidebar()
    cy.ValidFooter()
    
  });
  it('Teste de validação Carrinho', () => {
    cy.ValidBtnCarrinho()
    cy.ValidInserirCarrinho()
    cy.ValidRemoveCarrinho()
    
  });
  it('Teste Logout', () => {
    cy.logout()
    
  });

 
});