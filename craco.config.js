// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
};
