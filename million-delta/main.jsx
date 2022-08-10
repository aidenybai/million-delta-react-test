import { createRoot } from 'react-dom';
import { useList } from 'react';

let i = 0;

const App = () => {
  const [list, delta] = useList([]);

  return (
    <>
      <button id="button" onClick={() => list.push(String(++i))}>
        New
      </button>
      <ul delta={delta}>
        {list.map((item) => (
          <li>{item}</li>
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
