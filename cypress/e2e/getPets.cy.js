require('cypress-plugin-api')

describe('Get pets from PetStore', () => {
  beforeEach(() => {
    cy.fixture('petstore/post/valid_post.json').then(testData => {
      cy.api({
        failOnStatusCode: false,
        url: "/pet",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: testData.payload
      }).then(response => {
        expect(response.status).to.eq(200)
        cy.wrap(response.body).as('pet')
      })
    })
  })

  it('GET > /pet/{id} with Success', () => {
    cy.get('@pet').then(pet => {
      cy.fixture('petstore/get/valid_pet.json').then(testData => {
        cy.api({
          failOnStatusCode: false,
          url: "/pet/" + pet.id,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
          expect(response.status).to.eq(200)
          cy.validateSchema(response.body, testData.schema)
        })
      })
    })
  })
})