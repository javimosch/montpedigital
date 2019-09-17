module.exports = async app => {
    return {
        env: {
            defaultLanguage: 'fr'
        },
        plugins: {
            cleanDistFolders: {
                preserveFolders: ['img']
            }
        }
    }
}