// src/App.js

import React from 'react';
import { useTheme } from './themecontext.jsx';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'center',
        alignItems: 'center', width: '100%',
        height: '100vh',
        background: theme === 'light' ? 'lightgray' : 'black'
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div>
            <div onClick={() => toggleTheme()}
              style={{
                border: '1px solid gray', position: 'realtive',
                width: '40px', height: '20px',
                background: theme === 'light' ? 'white' : 'black'
              }}>
              <div style={{
                position: 'relative', top: '1px',
                left: theme === 'light' ? '1px' : '21px',
                width: '16px', height: '16px',
                background: theme === 'light' ? 'black' : 'white'
              }}>
              </div>
            </div>
          </div>
          <div style={{
            marginTop: '20px',
            color: theme === 'light' ? 'black' : 'white'
          }}>
            (Theme Context Provider)
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
