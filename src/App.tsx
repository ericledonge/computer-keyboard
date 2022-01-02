import './App.css';

import React from 'react';

function App() {
  return (
    <div className="keyboard">
      <h1>Eyes on the Screen</h1>
      <div className="row">
        <button className="key" data-key="`">
          `
        </button>
        <button className="key" data-key="1">
          1
        </button>
        <button className="key" data-key="2">
          2
        </button>
        <button className="key" data-key="3">
          3
        </button>
        <button className="key" data-key="4">
          4
        </button>
        <button className="key" data-key="5">
          5
        </button>
        <button className="key" data-key="6">
          6
        </button>
        <button className="key" data-key="7">
          7
        </button>
        <button className="key" data-key="8">
          8
        </button>
        <button className="key" data-key="9">
          9
        </button>
        <button className="key" data-key="0">
          0
        </button>
        <button className="key" data-key="-">
          -
        </button>
        <button className="key" data-key="=">
          =
        </button>
        <button className="key" data-key="BACKSPACE">
          DEL
        </button>
      </div>
      <div className="row">
        <button className="key utility" data-key="TAB">
          Tab
        </button>
        <button className="key" data-key="Q">
          Q
        </button>
        <button className="key" data-key="W">
          W
        </button>
        <button className="key" data-key="E">
          E
        </button>
        <button className="key jiggle" data-key="R">
          R
        </button>
        <button className="key" data-key="T">
          T
        </button>
        <button className="key" data-key="Y">
          Y
        </button>
        <button className="key" data-key="U">
          U
        </button>
        <button className="key" data-key="I">
          I
        </button>
        <button className="key" data-key="O">
          O
        </button>
        <button className="key" data-key="P">
          P
        </button>
        <button className="key" data-key="[">
          [
        </button>
        <button className="key" data-key="]">
          ]
        </button>
        <button className="key" data-key="\">
          \
        </button>
      </div>
      <div className="row">
        <button className="key utility" data-key="CAPSLOCK">
          CAPS
        </button>
        <button className="key" data-key="A">
          A
        </button>
        <button className="key" data-key="S">
          S
        </button>
        <button className="key" data-key="D">
          D
        </button>
        <button className="key" data-key="F">
          F
        </button>
        <button className="key" data-key="G">
          G
        </button>
        <button className="key" data-key="H">
          H
        </button>
        <button className="key" data-key="J">
          J
        </button>
        <button className="key" data-key="K">
          K
        </button>
        <button className="key" data-key="L">
          L
        </button>
        <button className="key" data-key=";">
          ;
        </button>
        <button className="key" data-key="'">
          &apos;
        </button>
        <button className="key utility" data-key="ENTER">
          ENTER
        </button>
      </div>
      <div className="row">
        <button className="key utility" data-key="SHIFT">
          SHIFT
        </button>
        <button className="key" data-key="Z">
          Z
        </button>
        <button className="key" data-key="X">
          X
        </button>
        <button className="key" data-key="C">
          C
        </button>
        <button className="key" data-key="V">
          V
        </button>
        <button className="key" data-key="B">
          B
        </button>
        <button className="key" data-key="N">
          N
        </button>
        <button className="key" data-key="M">
          M
        </button>
        <button className="key" data-key=",">
          ,
        </button>
        <button className="key" data-key=".">
          .
        </button>
        <button className="key" data-key="/">
          /
        </button>
        <button className="key utility" data-key="SHIFT">
          SHIFT
        </button>
      </div>
    </div>
  );
}

export default App;
