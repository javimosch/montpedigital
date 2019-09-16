module.exports = async app => {
    return {
        plugins: {
            cleanPublicHtmlFolders: {
                preserveFolders: ['img']
            }
        }
    }
}