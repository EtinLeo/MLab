const { JSDOM } = require('jsdom');
const { selectTheme } = require('../mlab');

test('selectTheme transitions to experiment screen', () => {
  const dom = new JSDOM(`<!doctype html><div class="container">
      <div id="themeSelectionScreen"></div>
      <div id="experimentScreen" style="opacity:0"></div>
      <button class="theme-button"></button>
    </div>`);

  global.document = dom.window.document;
  global.initializeExperiment = jest.fn();

  jest.useFakeTimers();

  const button = dom.window.document.querySelector('.theme-button');
  const event = { target: button };
  selectTheme('数与运算', event);

  jest.runAllTimers();

  const experiment = dom.window.document.getElementById('experimentScreen');
  expect(experiment.style.opacity).toBe('1');
});
