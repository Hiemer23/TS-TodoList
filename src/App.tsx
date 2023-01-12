import Head from './components/Head'
import Lista from './components/Lista'

import style from './styles/App.module.css'

function App() {

  return (
    <div className={style.app}>
      <Head />
      <Lista />
    </div>
  )
}

export default App
