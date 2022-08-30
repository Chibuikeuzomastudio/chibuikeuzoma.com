module.exports = {
    eleventyComputed: {
        key: data => Object.keys(data.exhibition).join('')
    }
}
