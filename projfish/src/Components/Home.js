import React from 'react';
import '../App.css';

export const Home = props => {
  return (
    <div className="home-container">
     <h1 className="title-h1">Welcome to The Fishing Log</h1>
     <div className="instructions">There are two types of information in this app:
     <p><span>Fishing Trip info</span> and <span>Fish Caught info</span></p><br />
     <p>You can enter data or view the data from both of these sections.
     There is also a Charts section, with 22 different types. It can help you catch fish but you
         need to enter some data first.</p><br />
         <p>Use the buttons on the left to navigate.</p>
        <div className="home-image"> {/* insert a picture here */}</div>
        <footer className="footer"><p>The Fishing Log 
        i-No Software, 2018</p></footer>
         </div>
      
    </div>
  );
}

export default Home;