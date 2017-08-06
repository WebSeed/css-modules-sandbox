module.exports = () => {
  const styles = require('./button.css')

  const div = document.createElement('div')
  div.innerHTML = 'Another red button'
  div.className = styles.button

  document.body.appendChild(div)
}
