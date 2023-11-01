module.exports = function (eleventyConfig) {
    return {
      dir: {
        input: "src",
        output: "public",
      },
      plugins: [
        "11ty-minify-html",
        "11ty-minify-css",
        "11ty-minify-js",
        "11ty-bundler"
      ]
    };
  };