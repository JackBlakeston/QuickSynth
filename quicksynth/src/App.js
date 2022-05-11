import Instrument from "./components/Instrument";
import { playControl, stopControl } from "./inputControl";

export default function App() {

  window.addEventListener('keydown', playControl)
  window.addEventListener('keyup', stopControl)

  return <Instrument/>
}