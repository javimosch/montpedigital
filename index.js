let express = require('express')
let app = express()
require('montpesites/server')
    .start(app, {})
    .then(({ server }) => {
        app.funql.extends({
            api: {
                bar() {
                    return 'BAR!'
                }
            }
        })
    })