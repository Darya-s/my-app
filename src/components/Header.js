import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div className='header'>
        
          <h1>Bags shop</h1>
       
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
          }