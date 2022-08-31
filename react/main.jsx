import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { useState } from 'react';

let i = 0;

const App = () => {
  const [list, setList] = useState([]);

  return (
    <>
      <button
        id="button"
        onClick={() => {
          // we use flushsync to avoid the 5000 updates to be batched
          flushSync(() => {
            setList([...list, String(++i)]);
          });
        }}
      >
        New
      </button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);

setTimeout(() => {
  const button = document.getElementById('button');
  for (let i = 0; i < 5000; i++) {
    button.click();
  }
}, 1000);
