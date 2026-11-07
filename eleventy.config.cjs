const markdown_it = require("markdown-it")
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  }
  eleventyConfig.setLibrary("md", markdown_it(options).use(require("markdown-it-footnote")));
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  };
};
