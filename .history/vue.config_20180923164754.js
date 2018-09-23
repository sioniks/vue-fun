module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/src/scss/_variables.scss";
          @import "@/src/scss/_mixins.scss";
        `
      }
    }
  }
}
