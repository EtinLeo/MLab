function initializeExperiment() {}

function transitionScreens(fromScreen, toScreen) {
    const from = document.getElementById(fromScreen);
    const to = document.getElementById(toScreen);
    const container = document.querySelector('.container');

    from.style.opacity = '0';
    from.style.transform = 'translateY(-20px)';
    from.style.pointerEvents = 'none';

    if (toScreen === 'welcomeScreen') {
        container.style.width = '40%';
        container.style.height = '250px';
    } else if (toScreen === 'themeSelectionScreen') {
        container.style.width = '60%';
        container.style.height = '350px';
    } else if (toScreen === 'experimentScreen') {
        container.style.width = '90%';
        container.style.height = '80vh';
    }

    setTimeout(() => {
        to.style.opacity = '1';
        to.style.transform = 'translateY(0)';
        to.style.pointerEvents = 'auto';
        if (toScreen === 'experimentScreen') {
            initializeExperiment();
        }
    }, 250);
}

function selectTheme(theme, event) {
    const button = event.target.closest('.theme-button');
    if (!button) {
        return;
    }
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);

    if (theme === '数与运算') {
        transitionScreens('themeSelectionScreen', 'experimentScreen');
    }
}

module.exports = { selectTheme, transitionScreens, initializeExperiment };
