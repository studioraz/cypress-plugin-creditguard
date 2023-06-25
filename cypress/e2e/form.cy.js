const creditCards = require('../fixtures/creditcard.json');

//before each test, visit the root of the application
beforeEach(() => {
    cy.visit('/');
 });

describe('fill out form', () => {

    it('can get iframe element', () => {
        cy.CGGetIframe().then($iframe => {
            cy.wrap($iframe)
                .should('exist')
                .should('be.visible')
        });
    });

    it('can fill out form, save card and submit form', () => {
        cy.CGFillCreditCardForm({
            cardNumberData: creditCards.default,
            saveCard : true,
            submit: false
        });
    })
});
