module.exports = async(app, options = {}) => {
    let sander = require('sander')
    const requireFromString = require('require-from-string')

    let pages = await sander.readdir(
        require('path').join(process.cwd(), 'src', 'pages')
    )
    pages = await Promise.all(
        pages.map(pageName => {
            return (async() => {
                let config = requireFromString(
                    (await sander.readFile(
                        require('path').join(
                            process.cwd(),
                            'src',
                            'pages',
                            pageName,
                            'index.js'
                        )
                    )).toString('utf-8')
                )
                config = await config(app)
                let data = {
                    href: config.target || `/${pageName}`,
                    title: config.title || pageName
                }
                data = await app.language.translate(
                    Object.assign(data, {
                        lang: options.lang
                    })
                )
                return data
            })()
        })
    )
    return {
        context: {
            pages
        }
    }
}