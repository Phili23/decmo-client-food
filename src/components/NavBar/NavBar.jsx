 import React from 'react';
 import SearchBar from '../SearchBar'

import { Link } from 'react-router-dom';
import './NavBar.css'

const Nav = () => {
  return (
    <div className='nav'>
      <Link className='link' to='/home'>
        
        <span>
        Foods Recipes
        </span>
      </Link>
      <Link className='link' to='/create'>
        <span>
          Create New Food Recipe
        </span>
      </Link>
        

      <Link className='link' to='/'>
        <span>
         Back
        </span>
      </Link>
      <Link className='link' to='/home/SearchBar'>
      <span>
         <SearchBar/>
        </span>
      </Link>
      <div className='link'>
                    <Link
                        style={{ textDecoration: "none", color: "white" }} to="/About">
                        About
                    </Link>
                </div>

    </div>
    
  );
};

export default Nav; 