module.exports = async(app, options = {}, { getPages }) => {
    return {
        context: {
            pages: await getPages(options)
        }
    }
}