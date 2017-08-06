const another = require('./another')

const styles = require('./button.css')

const div = document.createElement('div')
div.innerHTML = 'Red button'
div.className = styles.button

document.body.appendChild(div)

another()
