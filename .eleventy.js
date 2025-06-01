module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/Images");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
