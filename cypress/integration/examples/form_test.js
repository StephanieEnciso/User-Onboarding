describe("User Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    const nameInput = () => cy.get('input[name = "name"]');
    const emailInput = () => cy.get('input[name = "email"]');
    const passwordInput = () => cy.get('input[name = "password"]');
    const termsInput = () => cy.get('input[name = "terms"]');
    const submitBtn = () => cy.get('button');
    const error = () => cy.get()

    it('testing to make sure everything is working.', () => {
        expect(true).to.equal(true);

    });

    it('Can type in the name input', () => {
        nameInput()
         .should('have.value', '')
         .type('Anime')
         .should('have.value', 'Anime');   
    });

    it('Can type in the email input', () => {
        emailInput()
        .should('have.value', '')
        .type('anime@CuteLilDoggie.com')
        .should('have.value', 'anime@CuteLilDoggie.com');
    });

    it('Can type in the password input', () => {
        passwordInput()
         .should('have.value', '')
         .type('AdorablePup')
         .should('have.value', 'AdorablePup')
    });

    it('Can check Terms of Service box', () => {
        termsInput().check();
    });

    it('Can submit the form', () => {
        nameInput().type('Anime');
        emailInput().type('anime@CuteLilDoggie.com');
        passwordInput().type('AdorablePup');
        termsInput().check();
        submitBtn().click();
    });

    it('Form validation occurs if an input is empty', () =>{
        nameInput().type('An');
        emailInput().type('an');
        passwordInput().type('an');
        nameInput().clear();
        emailInput().clear();
        passwordInput().clear();
        submitBtn().should('be.disabled') //since there is no information typed it should not allow a user to submit.
    });

});