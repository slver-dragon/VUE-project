const CI_PROJECT_NAME = 'slver-dragon.github.io/vue-project/';

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + process.env.CI_PROJECT_NAME + "/"
      : "/",
};
