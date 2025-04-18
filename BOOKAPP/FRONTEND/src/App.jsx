import React from "react"
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import SearchBook from "./Components/SearchBook"
import DeleteBook from "./Components/DeleteBook"
import ViewBook from "./Components/ViewBook"
import UpdateBook from "./Components/UpdateBook"
import AddBook from "./Components/AddBook"
import NavBar from "./Components/navbar"

const App=()=>{
  return(
    <div>
      <Router>
         <NavBar/>
        <Routes>
          <Route path='/add' elements={<AddBook/>}/>
          <Route path='/View' elements={<ViewBook/>}/>
          <Route path='/Search' elements={<SearchBook/>}/>
          <Route path='/Update' elements={<UpdateBook/>}/>
          <Route path='/Delete' elements={<DeleteBook/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App