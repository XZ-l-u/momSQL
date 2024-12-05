// Quiz interaction
const quizButtons = document.querySelectorAll('.quiz button');
quizButtons.forEach(button => {
  button.addEventListener('click', function () {
    if (this.textContent === 'SELECT') {
      alert('Correct! Great job.');
    } else {
      alert('Oops! Try again.');
    }
    updateProgress();
  });
});

// Progress tracking
let progress = 50; // Initial progress percentage

function updateProgress() {
  // Increase progress by 10% each time a correct answer is selected
  progress += 10;
  if (progress > 100) progress = 100; // Cap progress at 100%

  // Update progress bar
  const progressBar = document.querySelector('.progress-filled');
  progressBar.style.width = `${progress}%`;

  // Update level text
  const levelText = document.querySelector('.progress-bar p');
  levelText.textContent = `Level: ${getLevel(progress)}`;
}

function getLevel(progress) {
  if (progress < 30) return 'Beginner';
  if (progress < 60) return 'Intermediate';
  if (progress < 90) return 'Advanced';
  return 'Master';
}

// Drag-and-drop functionality (for the intro activity)
const activityBox = document.querySelector('.activity-box');
const activityItems = activityBox.querySelectorAll('li');
activityItems.forEach(item => {
  item.setAttribute('draggable', true);
  item.addEventListener('dragstart', dragStart);
});

activityBox.addEventListener('dragover', dragOver);
activityBox.addEventListener('drop', dropItem);

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.textContent);
}

function dragOver(e) {
  e.preventDefault();
}

function dropItem(e) {
  e.preventDefault();
  const droppedText = e.dataTransfer.getData('text');
  const target = e.target;
  
  // Check if the drop was on a valid drop target
  if (target.tagName.toLowerCase() === 'li') {
    const answer = target.textContent;
    if (answer === 'Creating databases') {
      alert('Correct! SQL is used to create and manage databases.');
    } else {
      alert('Oops! Try again.');
    }
  }
}
