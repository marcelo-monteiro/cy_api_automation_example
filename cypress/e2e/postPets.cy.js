require('cypress-plugin-api')

describe('Post pets from PetStore', () => {
  it('POST > /pet with Success', () => {
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
        cy.validateSchema(response.body, testData.schema)
      })
    })
  })

  it('POST > /pet with Empty Body', () => {
    cy.fixture('petstore/post/empty_post.json').then(testData => {
      cy.api({
        failOnStatusCode: false,
        url: "/pet",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: testData.payload
      }).then(response => {
        expect(response.status).to.eq(405)
        cy.validateSchema(response.body, testData.schema)
      })
    })
  })

  it('POST > /pet with Invalid Header', () => {
    cy.fixture('petstore/post/valid_post.json').then(testData => {
      cy.api({
        failOnStatusCode: false,
        url: "/pet",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: testData.payload
      }).then(response => {
        expect(response.status).to.eq(415)
      })
    })
  })
})
