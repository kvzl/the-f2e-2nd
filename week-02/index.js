if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload()
  })
}

import('./src/Main.elm')
  .then(({ Elm }) => {
    const node = document.querySelector('main')
    if (!node) {
      throw new Error('Failed to mount app')
    }

    Elm.Main.init({ node })
  })
