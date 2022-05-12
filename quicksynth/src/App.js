import { playControl, stopControl } from "./inputControl";

const App = () => {

  document.addEventListener('keydown', playControl)
  document.addEventListener('keyup', stopControl)

  return (
    <div>QUICKSYNTH</div>
  )
}

export default App;