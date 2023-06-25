declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            CGFillCreditCardForm(creditCartFormData: CreditCartFormData): Chainable<Element>;
        }
    }
}
export interface CreditCartFormData {
    cardNumberData: CreditCartData;
    submit?: boolean;
    saveCard?: boolean;
}
export interface CreditCartData {
    cardNumber: string;
    expMonth: string;
    expYear: string;
    cvv: string;
    personalId?: string;
}
