import { Broken } from './cases/broken'
import { Working } from './cases/working'

const App = () => {
  const caseValue = sessionStorage.getItem('case')
  const showCase = (caseName) => {
    sessionStorage.setItem('case', caseName)
    window.location.reload()
  }

  return (
    <>
      <button
        onClick={() => {
          showCase('broken')
        }}>
        Show broken case
      </button>
      <button
        onClick={() => {
          showCase('working')
        }}
      >
        Show working case
      </button>
      {caseValue === 'broken' && <Broken />}
      {caseValue === 'working' && <Working />}
    </>
  )
}

export default App;
