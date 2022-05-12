import { playControl, stopControl } from "./inputControl";

const App = () => {

  window.addEventListener('keydown', playControl)
  window.addEventListener('keyup', stopControl)

  return (
  <div>
    <h1>QUICKSYNTH</h1>
  </div>
  )
}

export default App;