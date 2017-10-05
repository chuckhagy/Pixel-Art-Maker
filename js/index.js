function starter() {
  let $container = document.getElementById('containerCanvas');
  let $pallet = document.getElementById('containerPallet');
  let $reset = document.getElementById('reset');
  let $currentHolder = document.getElementById('currentHolder');

  let color = 'black';
  let state = 1;

  let $currentColor = document.createElement('div');
  $currentColor.classList.add('circle');
  $currentColor.style.backgroundColor = color;
  $currentColor.style.height = '125px';
  $currentColor.style.width = '125px';
  $currentHolder.appendChild($currentColor);

  $reset.addEventListener('mousedown', function(event) {
    $container.innerHTML = '';
    for (i = 0; i < 2490; i++) {
      let myDiv = document.createElement('div');
      myDiv.classList.add('gridLines');
      $container.appendChild(myDiv);
    }
  });

  $container.addEventListener('mousedown', function(event) {
    event.target.style.backgroundColor = color;
    event.target.style.border = `1px solid ${color}`;
    state = 0;
  });

  document.addEventListener('mouseup', function(event) {
    state = 1;
  });

  $container.addEventListener('mouseover', function(event) {
    if (state === 0) {
      event.target.style.backgroundColor = color;
      event.target.style.border = `1px solid ${color}`;
      $container.style.backgroundColor = 'black';
    }
  });

  $pallet.addEventListener('click', function(event) {
    if (event.target.id === 'containerPallet') {
      return;
    } else {
      color = event.target.style.backgroundColor;
      $currentColor.style.backgroundColor = color;
    }
  });

  for (i = 0; i < 2490; i++) {
    let myDiv = document.createElement('div');
    myDiv.classList.add('gridLines');
    $container.appendChild(myDiv);
  }
  let colors = ['white', 'black', 'red', 'blue', 'green', 'yellow', 'grey', 'purple', 'orange', 'teal', 'gold', 'firebrick'];
  for (i = 0; i < 12; i++) {
    let $colorDiv = document.createElement('div');
    $colorDiv.classList.add('circle');
    $colorDiv.style.backgroundColor = colors[i];
    $pallet.appendChild($colorDiv);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  starter();
});
