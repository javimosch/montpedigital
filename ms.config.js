module.exports = async app => {
    return {
        env: {
            defaultLanguage: 'fr',
            domainn: 'montech.misitioba.com'
        },
        plugins: {
            cleanDistFolders: {
                preserveFolders: ['img']
            }
        }
    }
}