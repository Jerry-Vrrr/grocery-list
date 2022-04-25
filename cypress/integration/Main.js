describe('main page flow', () => {
    it('should have a form', () => {
        cy.visit('http://localhost:3000/')
        .get('.form').get('.item').get('.amount').get('.submit')
    });

    it('should be able to add an item and amount and display a new item', () => {
        cy.visit('http://localhost:3000/')
        .get('.item')
        .type('bananas')
        .get('.amount')
        .type('9')
        .get('.submit').click()
        .get('.card').last().contains('banana')

    });
    
/*
npm = -D cypress

*/

})