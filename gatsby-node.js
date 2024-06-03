exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: 'null-loader',
          },
        ],
      },
    })
  }
}
