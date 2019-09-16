module.exports = async app => {
    return {
        env: {
            defaultLanguage: 'fr'
        },
        layoutPartials: ['_footer.html', '_head.html'],
        plugins: {
            cleanPublicHtmlFolders: {
                preserveFolders: ['img']
            }
        }
    }
}