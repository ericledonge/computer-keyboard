import './App.css';

import React, { useEffect, useRef, useState } from 'react';

type keyboardKey = {
  key: string;
  value: string;
  utility?: boolean;
};

function App() {
  const [jigglingKey, setJigglingKey] = useState('');

  const container: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container?.current?.focus();
    setJigglingKey(getRandomKey(keys));
  }, []);

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
    { key: '-', value: '-' },
    { key: '=', value: '=' },
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

  const keysRow3: Array<keyboardKey> = [
    { key: 'CAPSLOCK', value: 'CAPS', utility: true },
    { key: 'A', value: 'A' },
    { key: 'S', value: 'S' },
    { key: 'D', value: 'D' },
    { key: 'F', value: 'F' },
    { key: 'G', value: 'G' },
    { key: 'H', value: 'H' },
    { key: 'J', value: 'J' },
    { key: 'K', value: 'K' },
    { key: 'L', value: 'L' },
    { key: ';', value: ';' },
    { key: "'", value: "'" },
    { key: 'ENTER', value: 'ENTER', utility: true },
  ];

  const keysRow4: Array<keyboardKey> = [
    { key: 'SHIFT1', value: 'SHIFT', utility: true },
    { key: 'Z', value: 'Z' },
    { key: 'X', value: 'X' },
    { key: 'C', value: 'C' },
    { key: 'V', value: 'V' },
    { key: 'B', value: 'B' },
    { key: 'N', value: 'N' },
    { key: 'M', value: 'M' },
    { key: ',', value: ',' },
    { key: '.', value: '.' },
    { key: '/', value: '/' },
    { key: 'SHIFT2', value: 'SHIFT', utility: true },
  ];

  const keys = keysRow1.concat(keysRow2).concat(keysRow3).concat(keysRow4);

  const getRandomKey = (keys: Array<keyboardKey>) =>
    keys[Math.round(Math.random() * (keys.length - 1))].key;

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

  const handleKeyPressed = (key: keyboardKey) => {
    if (key.key === jigglingKey) setJigglingKey(getRandomKey(keys));
  };

  const handleKeyEventEmitted = (event: KeyboardEvent) => {
    if (event.key.toUpperCase() === jigglingKey) setJigglingKey(getRandomKey(keys));
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={container}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="keyboard"
      onKeyPress={(event) => handleKeyEventEmitted(event)}>
      <h1>Eyes on the Screen</h1>
      <div className="row">
        {keysRow1.map((key) => (
          <button
            key={key.key}
            className={getClassNames(key)}
            data-key={key.key}
            onClick={() => handleKeyPressed(key)}>
            {key.value}
          </button>
        ))}
      </div>

      <div className="row">
        {keysRow2.map((key) => (
          <button
            key={key.key}
            className={getClassNames(key)}
            data-key={key.key}
            onClick={() => handleKeyPressed(key)}>
            {key.value}
          </button>
        ))}
      </div>

      <div className="row">
        {keysRow3.map((key) => (
          <button
            key={key.key}
            className={getClassNames(key)}
            data-key={key.key}
            onClick={() => handleKeyPressed(key)}>
            {key.value}
          </button>
        ))}
      </div>

      <div className="row">
        {keysRow4.map((key) => (
          <button
            key={key.key}
            className={getClassNames(key)}
            data-key={key.key}
            onClick={() => handleKeyPressed(key)}>
            {key.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
