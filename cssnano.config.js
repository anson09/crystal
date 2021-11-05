module.exports = {
  preset: [
    "default",
    {
      convertValues: false, // fix cssnano opacity 100% -> 1%
    },
  ],
};
