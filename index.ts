import standardVersion from 'standard-version'

standardVersion({
  infile: 'docs/CHANGELOG.md',
  noVerify: true,
  silent: true,
})
  .then(() => {
    // standard-version is done
  })
  .catch(err => {
    console.error(`standard-version failed with message: ${err.message}`)
  })
