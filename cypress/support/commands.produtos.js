Cypress.Commands.add('ValidProdutos', () => {
    cy.get('#item_1_title_link > .inventory_item_name').should('exist')
    cy.get('#item_2_title_link > .inventory_item_name').should('exist')
    cy.get('#item_4_title_link > .inventory_item_name').should('exist')
    cy.get('#item_5_title_link > .inventory_item_name').should('exist')
});

Cypress.Commands.add('ValidPreco', () => {
    cy.get(':nth-child(1) > .inventory_item_description').should('contain', '$29.99')
    cy.get(':nth-child(2) > .inventory_item_description').should('contain', '$9.99')
    cy.get(':nth-child(3) > .inventory_item_description').should('contain', '$15.99')
    cy.get(':nth-child(4) > .inventory_item_description').should('contain', '$49.99')
    cy.get(':nth-child(5) > .inventory_item_description').should('contain', '$7.99')
    cy.get(':nth-child(6) > .inventory_item_description').should('contain', '$15.99')
});

Cypress.Commands.add('ValidAnuncio', () => {
    cy.get(':nth-child(1) > .inventory_item_description').should('contain', 'Sauce Labs Backpack')
    cy.get(':nth-child(2) > .inventory_item_description').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(3) > .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt')
    cy.get(':nth-child(4) > .inventory_item_description').should('contain', 'Sauce Labs Fleece Jacket')
    cy.get(':nth-child(5) > .inventory_item_description').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(6) > .inventory_item_description').should('contain', 'Test.allTheThings() T-Shirt (Red)')

});

Cypress.Commands.add('ValidImagensProduto', () => {
    cy.get('#item_0_img_link > .inventory_item_img').should('exist')
    cy.get('#item_1_img_link > .inventory_item_img').should('exist')
    cy.get('#item_2_img_link > .inventory_item_img').should('exist')
    cy.get('#item_3_img_link > .inventory_item_img').should('exist')
    cy.get('#item_4_img_link > .inventory_item_img').should('exist')
    cy.get('#item_5_img_link > .inventory_item_img').should('exist')

});
