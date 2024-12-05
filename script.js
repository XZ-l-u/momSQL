document.querySelectorAll('.command').forEach(item => {
    item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', event.target.textContent);
    });
  });
  
  document.getElementById('drop-area').addEventListener('dragover', event => {
    event.preventDefault();
  });
  
  document.getElementById('drop-area').addEventListener('drop', event => {
    event.preventDefault();
    const command = event.dataTransfer.getData('text/plain');
    event.target.textContent = `Command Selected: ${command}`;
  });
  
  document.getElementById('check-answer').addEventListener('click', () => {
    const answer = document.getElementById('drop-area').textContent.includes('SELECT');
    const feedback = document.getElementById('feedback');
    if (answer) {
      feedback.textContent = 'Correct! SELECT is used to retrieve data.';
      feedback.style.color = 'green';
    } else {
      feedback.textContent = 'Oops! Try again.';
      feedback.style.color = 'red';
    }
  });
  