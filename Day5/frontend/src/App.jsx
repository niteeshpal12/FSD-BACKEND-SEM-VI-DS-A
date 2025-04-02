import Delete from "./Components/Delete"
import Register from "./Components/Register"
import Update from "./Components/Update"
import View from "./Components/View"
import './App.css'


const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register/>
      <Delete/>
      <Update/>
      <View/>
    </div>
  )
}

export default App