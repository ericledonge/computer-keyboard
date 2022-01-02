import './App.css';

import React, { useEffect, useState } from 'react';

type keyboardKey = {
  key: string;
  value: string;
  utility?: boolean;
};

function App() {
  const keysRow1: Array<keyboardKey> = [
    { key: '`', value: '`' },
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: '6', value: '6' },
    { key: '7', value: '7' },
    { key: '8', value: '8' },
    { key: '9', value: '9' },
    { key: 'BACKSPACE', value: 'DEL' },
  ];

  const keysRow2: Array<keyboardKey> = [
    { key: 'TAB', value: 'tab', utility: true },
    { key: 'Q', value: 'Q' },
    { key: 'W', value: 'W' },
    { key: 'E', value: 'E' },
    { key: 'R', value: 'R' },
    { key: 'T', value: 'T' },
    { key: 'Y', value: 'Y' },
    { key: 'U', value: 'U' },
    { key: 'I', value: 'I' },
    { key: 'O', value: 'O' },
    { key: 'P', value: 'P' },
    { key: '[', value: '[' },
    { key: ']', value: ']' },
    { key: '\\', value: '\\' },
  ];

  const keys = keysRow1.concat(keysRow2);

  const getRandomKey = (keys: Array<keyboardKey>) =>
    keys[Math.round(Math.random() * (keys.length - 1))].key;

  const [jigglingKey, setJigglingKey] = useState('');

  useEffect(() => {
    setJigglingKey(getRandomKey(keys));
  }, []);

  const getClassNames = (key: keyboardKey) => {
    let classNames = 'key';

    if (key.key === jigglingKey) {
      classNames = classNames.concat(' jiggle');
    }

    if (key.utility) {
      classNames = classNames.concat(' utility');
    }

    return classNames;
  };

  return (
    <div className="keyboard">
      <h1>Eyes on the Screen</h1>
      <div className="row">
        {keysRow1.map((key) => (
          <button key={key.key} className={getClassNames(key)} data-key={key.key}>
            {key.value}
          </button>
        ))}
      </div>

      <div className="row">
        {keysRow2.map((key) => (
          <button key={key.key} className={getClassNames(key)} data-key={key.key}>
            {key.value}
          </button>
        ))}
      </div>

      <div className="row">
        {/*  <button className="key utility" data-key="CAPSLOCK">*/}
        {/*    CAPS*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="A">*/}
        {/*    A*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="S">*/}
        {/*    S*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="D">*/}
        {/*    D*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="F">*/}
        {/*    F*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="G">*/}
        {/*    G*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="H">*/}
        {/*    H*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="J">*/}
        {/*    J*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="K">*/}
        {/*    K*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="L">*/}
        {/*    L*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key=";">*/}
        {/*    ;*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="'">*/}
        {/*    &apos;*/}
        {/*  </button>*/}
        {/*  <button className="key utility" data-key="ENTER">*/}
        {/*    ENTER*/}
        {/*  </button>*/}
      </div>

      <div className="row">
        {/*  <button className="key utility" data-key="SHIFT">*/}
        {/*    SHIFT*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="Z">*/}
        {/*    Z*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="X">*/}
        {/*    X*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="C">*/}
        {/*    C*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="V">*/}
        {/*    V*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="B">*/}
        {/*    B*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="N">*/}
        {/*    N*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="M">*/}
        {/*    M*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key=",">*/}
        {/*    ,*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key=".">*/}
        {/*    .*/}
        {/*  </button>*/}
        {/*  <button className="key" data-key="/">*/}
        {/*    /*/}
        {/*  </button>*/}
        {/*  <button className="key utility" data-key="SHIFT">*/}
        {/*    SHIFT*/}
        {/*  </button>*/}
      </div>
    </div>
  );
}

export default App;
