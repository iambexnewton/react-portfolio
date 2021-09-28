import React from 'react';

function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <a href="#/">
        <h1>Shopping Cart</h1>
      </a>

      <div>
        <a href="#/">
          Cart {''}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/">Sign in</a>
      </div>
    </header>
  );
}

export default Header;
