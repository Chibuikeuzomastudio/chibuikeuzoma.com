const Image = require("@11ty/eleventy-img");

async function imageShortcode(name, src, alt) {
    let options = {
        widths: [400, 800, 1000],
        formats: ['webp', 'jpeg'],
        urlPath: "/assets/images/works",
        outputDir: "./dist/assets/images/works",
    };

    let metadata = await Image(src, options);
    let imageAttributes = {
        alt,
        sizes: '100%',
        // loading: "lazy",
        decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortcode;
