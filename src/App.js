import React, { useState } from 'react';
import './App.css';
import useMousePosition from "./components/UseMousePosition";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { ChatList } from "./pages/ChatList";
import Cursor from "./assets/images/cursor.png";

export default function App() {
  const { clientX, clientY } = useMousePosition();
  const [hidden, setHidden] = useState(true);

  return (
    <div onMouseDown={(e) => setHidden(false)} onMouseUp={(e) => setHidden(true)}>

      {/* Paw cursor tracking */}
      <div className={hidden ? 'hidden' : 'shown'}
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          pointerEvents: "none"
        }}
      >
        <img
          src={Cursor}
          style={{
            position: "absolute",
            left: clientX,
            top: clientY + 650,
            transform: "translate(-50%, -50%)",
            
          }} />
      </div>

      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/cat-call/">
                <Home />
              </Route>
              <Route path="/cat-call/settings">
                <Settings />
              </Route>
              <Route path="/cat-call/chat">
                <ChatList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
