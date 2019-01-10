(function anon() {
  const input = document.querySelector('.input__title');
  const placeholder = document.querySelector('.input__placeholder');
  const list = document.querySelector('.list');
  const select = document.querySelector('.input__select');
  const closeBtns = [];
  const fruits = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry',
    'Appla',
    'Applw',
    'Applu',
  ];

  const renderList = (arr) => {
    select.innerHTML = '';
    arr.forEach((element) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'input__select-item');
      li.textContent = element;
      select.appendChild(li);
    });
  };

  const finalArr = (arr, value) => {
    const newArr = [];
    arr.forEach((element) => {
      if (element.indexOf(value) === 0) {
        newArr.push(element);
      }
    });
    return newArr;
  };

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
  });
  placeholder.addEventListener('click', () => {
    placeholder.classList.add('out');
    input.focus();
  });

  input.addEventListener('keyup', (e) => {
    if (!input.value) {
      return input.value;
    }
    const inputValue = input.value[0].toUpperCase() + input.value.slice(1);
    const array2 = finalArr(fruits, inputValue);
    renderList(array2);
    if (e.key === 'Enter' && inputValue !== '') {
      createElem(inputValue);
      input.blur();
      input.value = '';
      closeItem();
    }
  });

  select.addEventListener('click', (e) => {
    const selectValue = e.target.textContent;
    createElem(selectValue);
    closeItem();
  });
}());
