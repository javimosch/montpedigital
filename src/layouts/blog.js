module.exports = async(app, options = {}, { getPages }) => {
    return {
        context: {
            pages: (await getPages(options)).filter(p => {
                return !!p.data.article
            })
        }
    }
}