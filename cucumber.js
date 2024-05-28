module.exports = {
    default: {
      require: ["cypress/support/step_definitions/*.js"],
      tags: "not @ignore",
    },
  };