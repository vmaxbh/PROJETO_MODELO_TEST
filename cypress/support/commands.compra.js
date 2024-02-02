

Cypress.Commands.add('EscolhradeProdutosdoSite', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
});

Cypress.Commands.add('AcessoCarrinhoCompras', () => {
    cy.get('.shopping_cart_link').click()

});

Cypress.Commands.add('RemoverPartedeProdutos', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
});

Cypress.Commands.add('Checkout', () => {
    cy.get('[data-test="checkout"]').click()
});

Cypress.Commands.add('CadastroCompras', () => {
    cy.get('[data-test="firstName"]').type('João')
    cy.get('[data-test="lastName"]').type('da Silva')
    cy.get('[data-test="postalCode"]').type('31710560')
    cy.get('[data-test="continue"]').click()

});

Cypress.Commands.add('FinalizandoCompra', () => {
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="back-to-products"]').click()

});

