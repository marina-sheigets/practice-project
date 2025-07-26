module.exports = {
  process(_, filename) {
    const name = filename.split('/').pop().split('.')[0];
    return {
      code: `
        const React = require("react");
        module.exports = {
          __esModule: true,
          default: () => React.createElement('svg', { 'data-testid': 'svg-${name}' })
        };
      `,
    };
  },
};
