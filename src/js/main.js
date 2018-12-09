(function anon() {
  const input = document.querySelector('.input__title');
  const placeholder = document.querySelector('.input__placeholder');
  const list = document.querySelector('.list');
  const select = document.querySelector('.input__select');
  const closeBtns = [];

  const moveCursor = () => {
    const listWidth = parseInt(
      getComputedStyle(list, '').width.replace('px', ''),
    );
    input.style.paddingLeft = `${listWidth + 20}px`;
  };
  const closeItem = () => {
    closeBtns.forEach((element) => {
      element.addEventListener('click', () => {
        element.parentNode.remove();
        moveCursor();
        if (list.innerHTML === '') {
          placeholder.classList.remove('out');
        }
      });
    });
  };

  const createElem = (value) => {
    const newLi = document.createElement('li');
    const newImg = document.createElement('img');
    newImg.setAttribute('class', 'close');
    newImg.setAttribute('alt', 'close');
    newImg.setAttribute('src', './images/cross.svg');
    newLi.classList.add('list__item');
    newLi.textContent = value;
    list.appendChild(newLi);
    newLi.appendChild(newImg);
    closeBtns.push(newImg);
    moveCursor();
  };

  input.addEventListener('click', () => {
    placeholder.classList.add('out');
    select.classList.add('active');
  });
  placeholder.addEventListener('click', () => {
    placeholder.classList.add('out');
    select.classList.add('active');
  });

  input.addEventListener('keypress', (e) => {
    const inputValue = input.value;
    if (e.key === 'Enter' && inputValue !== '') {
      createElem(inputValue);
      input.blur();
      input.value = '';
      select.classList.remove('active');
      closeItem();
    }
  });
  select.addEventListener('click', (e) => {
    const selectValue = e.target.textContent;
    select.classList.remove('active');
    createElem(selectValue);
    closeItem();
  });
}());
