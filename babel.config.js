module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          ie: '11',
          ios: '10'
        }
      }
    ],
    '@babel/typescript'
  ]
};
