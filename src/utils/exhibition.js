module.exports = (key) => {
    const regex = /\[([0-9]+)]/;
    const matches = key.match(regex)
    if (matches) {
        const exhibition = key.replace(/\[[0-9]+]/, "")
        const date = matches[1]
        return `<p class="title">
                ${exhibition} 
                </p>
                <p class="date">
                ${date} 
                </p>`
    }
 }