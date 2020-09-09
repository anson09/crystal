module.exports = {
  plugins: [require("autoprefixer")({ grid: true })].concat(
    process.env.NODE_ENV === "production"
      ? require("postcss-css-variables")({
          preserve: true,
          preserveInjectedVariables: false,
          variables: require("@rqjs/rqthemes/lib/light.json"),
        })
      : []
  ),
};
