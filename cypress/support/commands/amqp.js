Cypress.Commands.add('purgeQueueMessages', () => {
    cy.api({
        url: 'https://porpoise.rmq.cloudamqp.com/api/queues/fsbjfytv/tasks/contents',
        method: 'DELETE',
        body: {
            vhost: 'fsbjfytv',
            name: 'tasks',
            mode: 'purge'
        },
        headers: {
            authorization: 'Basic ZnNiamZ5dHY6aU5sTHNxQVJNbnJSNl9qSG9ZU2dnaGdxMzYxTFloaG8='
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
            name: 'tasks',
            truncate: '50000',
            ackmode: 'ack_requeue_true',
            encoding: 'auto',
            count: '1'
        },
        headers: {
            authorization: 'Basic ZnNiamZ5dHY6aU5sTHNxQVJNbnJSNl9qSG9ZU2dnaGdxMzYxTFloaG8='
        },
        failOnStatusCode: false
    }).then(response => { return response })
})