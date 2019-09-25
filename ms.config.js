module.exports = async app => {
    return {
        env: {
            defaultLanguage: 'fr',
            domainn: 'montpedigital.misitioba.com'
        },
        plugins: {
            cleanDistFolders: {
                preserveFolders: ['img']
            }
        }
    }
}