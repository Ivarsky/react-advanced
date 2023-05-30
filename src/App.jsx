
import Players from './Players'
import Teams from './Teams'
import useToggle from '../useToggle'

function App() {
  const {value: showTeams, toggle} = useToggle(false)
  return (
      <div>
        <button onClick={toggle}>{ showTeams ? 'Hide Teams' : 'Show Teams'}</button>
        { showTeams && <Teams color='red'/>}
        <Players backgroundColor='lightblue'/>
      </div>
  )
}

export default App
