describe('PasswordInput', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Rendering', function() {
    it('successfully renders the PasswordInput component', () => {
      cy.contains('Credit Card Number')
      cy.get('input').should('have.attr', 'placeholder', '1234 1234 1234 1234')
    })
  })

  describe('Features', function() {
    it('displays the credit card types', () => {
      cy.get('input')
        .type('4517')
        .get('[data-test=cardType] > img')
        .should('have.attr', 'src', '/visa.svg')
    })

    it('should display a check mark on a valid card', () => {
      cy.get('input')
        .type('4517278398762993')
        .get('[data-test=mark] > img')
        .should('have.attr', 'src', '/check.svg')
    })

    it('should display an error message on API failure', () => {
      cy.get('input').type('1234123412341234')

      cy.contains('Oh no!')
    })

    it('should display an X on an incomplete card when you blur', () => {
      cy.get('input')
        .type('4517')
        .blur()
    })

    it('should only allow a maximum of 16 digits for non-amex', () => {
      cy.get('input').type('4517342342424234234234242342342423423423423423424')

      cy.get('input').should('have.value', '4517 3423 4242 4234')
    })

    it('should only allow a maximum of 15 digits for amex', () => {
      cy.get('input').type('371449635398431')

      cy.get('input').should('have.value', '3714 496353 98431')
    })

    it('should only allow numbers in the input field', () => {
      cy.get('input').type('4517b3434a3434banana3434')

      cy.get('input').should('have.value', '4517 3434 3434 3434')
    })
  })
})
