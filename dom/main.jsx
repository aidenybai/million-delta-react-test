const div = document.createElement('div');
const ul = document.createElement('ul');
const btn = document.createElement('button');
btn.textContent = 'New';
btn.id = 'button';
let i = 0;

btn.onclick = () => {
  const li = document.createElement('li');
  li.textContent = ++i;
  ul.appendChild(li);
};

div.appendChild(btn);
div.appendChild(ul);

document.getElementById('root').appendChild(div);

setTimeout(() => {
  const button = document.getElementById('button');
  for (let i = 0; i < 5000; i++) {
    button.click();
  }
}, 1000);
