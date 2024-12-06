const { defineConfig } = require('cypress');
const { addMochawesome } = require('cypress-mochawesome-reporter/plugin');

module.exports = (on, config) => {
  addMochawesome(on);
  return config;
};