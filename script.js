document.addEventListener('DOMContentLoaded', () => {
    let offset = 0;
    const numberOfPosters = 4;
    const moviesLine = document.querySelector('.movies-line');
    setInterval(() => {
        offset += 400;
        if (offset > 400 * (numberOfPosters - 1))
            offset = 0;
        moviesLine.style.left = - offset + 'px';
    }, 1800);
});

