/// <reference types="cypress" />
import 'cypress-iframe';
import {CreditCartFormData} from "./types";

Cypress.Commands.add('CGFillCreditCardForm', (creditCartFormData: CreditCartFormData): void => {
    if (Cypress.config('chromeWebSecurity')) {
        throw new Error(
            "You must set `{ \"chromeWebSecurity\": false }` in `cypress.json`, " +
            "or cypress-plugin-stripe-elements cannot access the Stripe Elements " +
            "<iframe> to perform autofill."
        );
    }

    cy.get('iframe[src*=\"ppsuat.creditguard.co.il\"]')
        .iframe()
        .should('exist')
        .should('be.visible')
        .then(($iframe) => {
            const iframeDocument = $iframe.contents().find('body');
            expect(iframeDocument).not.to.be.empty;
        }).within(($iframe) => {

        // Fill form
        for (const [key, value] of Object.entries(creditCartFormData.cardNumberData)) {
            cy.get(`[name="${key}"]`).then((field) => {
                const tagName = field.prop('tagName').toLowerCase();
                if (tagName === 'input') {
                    cy.wrap(field).clear().type(value);
                } else if (tagName === 'select') {
                    cy.wrap(field).select(value);
                }
            });
        }

        // Check save card
        if (creditCartFormData.saveCard !== false) {
            cy.get('#tns-box').check({force: true});
        }

        // Submit form
        if (creditCartFormData.submit !== false) {
            cy.get('#cg-form').submit();
        }
    });
});


Cypress.Commands.add('CGGetIframe', () => {
    return cy.get('iframe[src*=\"ppsuat.creditguard.co.il\"]')
        .iframe();
});

