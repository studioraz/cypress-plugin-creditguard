declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * fill-up new card form with options to save the card and submit the form.
             * @param creditCartFormData
             * @constructor
             */
            CGFillCreditCardForm(creditCartFormData: CreditCartFormData): Chainable<any>,

            /**
             * get payment page iframe element to interact with its content freely
             * @constructor
             */
            CGGetIframe(): Chainable<HTMLIFrameElement>,
        }
    }
}


export interface CreditCartFormData {
    cardNumberData: CreditCartData,
    submit?: boolean,
    saveCard?: boolean,

}

export interface CreditCartData {
    cardNumber: string,
    expMonth: string,
    expYear: string,
    cvv: string,
    personalId?: string
}
