Cypress.Commands.add('purgeQueueMessages', () => {
    cy.api({
        url: Cypress.env('amqpHost') + '/tasks/contents',
        method: 'DELETE',
        body: {
            vhost: 'fsbjfytv',
            name: Cypress.env('amqpQueue'),
            mode: 'purge'
        },
        headers: {
            authorization: Cypress.env('amqpToken')
        },
        failOnStatusCode: false
    }).then(response => { return response })

})

Cypress.Commands.add('getMessageQueue', () => {
    cy.api({
        url: 'https://porpoise.rmq.cloudamqp.com/api/queues/fsbjfytv/tasks/get',
        method: 'POST',
        body: {
            vhost: 'fsbjfytv',
            name: Cypress.env('amqpQueue'),
            truncate: '50000',
            ackmode: 'ack_requeue_true',
            encoding: 'auto',
            count: '1'
        },
        headers: {
            authorization: Cypress.env('amqpToken')
        },
        failOnStatusCode: false
    }).then(response => { return response })
})