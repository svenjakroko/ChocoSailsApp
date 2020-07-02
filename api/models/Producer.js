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
        year: {
            type: 'number',
            required: true
        },
        country: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        logo: {
            type: 'string',
            required: true
        }
    }
}