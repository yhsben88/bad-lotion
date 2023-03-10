import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Note from './Note';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import Edit from './Edit';
import useFetch from './useFetch';
import { useEffect, useState } from "react";


function App() {
  //useFetch is a custom hook made for fetching data from the database.json file
  const { data: notes, isPending, error } = useFetch("http://localhost:8000/notes");
  
  const [sidebarIsHidden, setSidebarIsHidden] = useState(false);
  const handleToggleSidebar = () => {
    // function to toggle css for Sidebar flex value
    setSidebarIsHidden(!sidebarIsHidden);
    console.log("side bar has been toggled");
  };

  return (
    
    <Router>
      <div className="app">
        <header>
          < Navbar handleToggleSidebar={handleToggleSidebar}/>
        </header>
        <section id = "main-body">
          <section id="sidebar" className={sidebarIsHidden ? "hide-sidebar" : ""}>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { notes && < Sidebar notes={notes} title="Notes" 
            // handleDelete={handleDelete}
            />}
          </section>
          <section id = "note-area">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            <Switch>
              <Route exact path="/note">
                < Home />
                {/* blank page with no notes */}
              </Route>
              <Route exact path = "/note/:id">
                < Note />
                {/* view page for note */}
              </Route>
              <Route path="/note/:id/edit">
                < Edit />
                {/* edit page for note */}
              </Route>
            </Switch>
          </section>
        </section>
      </div>
    </Router>
  );
}

export default App;