module.exports = async app => {
    return {
        env: {
            defaultLanguage: 'fr'
        },
        layoutPartials: [
            '_footer.html',
            '_head.html',
            '_sitemap.html',
            '_header.html'
        ],
        plugins: {
            cleanPublicHtmlFolders: {
                preserveFolders: ['img']
            }
        }
    }
}