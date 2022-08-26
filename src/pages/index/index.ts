import './index.scss'
import ValidationForm from '../../ts/validationForm'

class Index {
  constructor () {
    this.init()
  }

  init () {
    document.querySelectorAll('form')
      .forEach(form => {
        const Container = new ValidationForm(form as HTMLFormElement)
        Container.init()
      })
  }
}

new Index() // eslint-disable-line
