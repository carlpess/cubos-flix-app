const buttonTheme = document.querySelector('.btn-theme');
const container = document.querySelector('body');
const inicialTheme = localStorage.getItem('theme');

container.style.setProperty('--background-color', inicialTheme === 'dark' ? '#242424' : '#FFF');
container.style.setProperty('--input-border-color', inicialTheme === 'dark' ? '#FFF' : '#979797');
container.style.setProperty('--highlight-background', inicialTheme === 'dark' ? '#454545' : '#FFF');
container.style.setProperty('--highlight-color', inicialTheme === 'dark' ? '#FFF' : 'rgba(0, 0, 0, 0.7)');
container.style.setProperty('--highlight-description', inicialTheme === 'dark' ? '#FFF' : '#000');
container.style.setProperty('--color', inicialTheme === 'dark' ? '#FFF' : '#000');

buttonTheme.addEventListener('click', () => {
    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');

    container.style.setProperty('--background-color', container.style.getPropertyValue('--background-color') === '#242424' ? '#FFF' : '#242424');

    container.style.setProperty('--input-border-color', container.style.getPropertyValue('--input-border-color') === '#FFF' ? '#979797' : '#FFF');

    container.style.setProperty('--highlight-background', container.style.getPropertyValue('--highlight-background') === '#454545' ? '#FFF' : '#454545');

    container.style.setProperty('--highlight-color', container.style.getPropertyValue('--highlight-color') === '#FFF' ? 'rgba(0, 0, 0, 0.7)' : '#FFF');

    container.style.setProperty('--highlight-description', container.style.getPropertyValue('--highlight-description') === '#FFF' ? '#000' : '#FFF');

    container.style.setProperty('--color', container.style.getPropertyValue('--color') === '#FFF' ? '#000' : '#FFF');
})