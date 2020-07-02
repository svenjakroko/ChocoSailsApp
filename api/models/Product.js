module.exports = {
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },
        name: {
            type: 'string',
            required: true
        },
        price: {
            type: 'number',
            required: true
        },
        percentage: {
            type: 'number',
            required: true
        },
        producer: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
            required: true
        },
        weight: {
            type: 'number',
            required: true
        }
    }
}