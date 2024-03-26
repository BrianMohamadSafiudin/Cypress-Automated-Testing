// Step 1: Visit a page

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// ---------------------------------------------

// Step 2: Query for an element

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    // tes untuk sukses
    cy.contains('type')

    // tes untuk gagal
    // cy.contains('hype')
  })
})

// ---------------------------------------------

// Write your first test (True)

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// ---------------------------------------------

// Write your first test (False)

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })