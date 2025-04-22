// Change text content dynamically
const changeTextBtn = document.getElementById('changeTextBtn');
const textToChange = document.getElementById('textToChange');

changeTextBtn.addEventListener('click', () => {
    textToChange.textContent = 'The text has been changed dynamically! Enjoy the update!';
});

// Modify CSS styles dynamically
const styleBtn = document.getElementById('styleBtn');
const styledText = document.getElementById('styledText');

styleBtn.addEventListener('click', () => {
    styledText.style.color = '#ff5722';
    styledText.style.fontSize = '1.5em';
    styledText.classList.add('highlight');
});

// Add or remove elements dynamically
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const newContentContainer = document.getElementById('newContentContainer');

addBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.classList.add('new-paragraph');
    newParagraph.textContent = 'This interactive webpage now has a modern and clean design. The added content helps explain the purpose of the project, while the styling enhances its appearance and usability!';
    newContentContainer.appendChild(newParagraph);
});

removeBtn.addEventListener('click', () => {
    const paragraphs = newContentContainer.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        newContentContainer.removeChild(paragraphs[paragraphs.length - 1]);
    }
});

