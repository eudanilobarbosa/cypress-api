

describe('POST /users', () => {


  it('register a new user', () => {

    const user = {
      name: 'Fernando Papito',
      email: 'papito@yahoo.com',
      password: 'pwd123'
    }

    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
    })

  })


})