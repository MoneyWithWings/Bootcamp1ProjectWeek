'use strict';

const app = new ApplicationCache();

const dom = app.render();

const root = document.getElementById('root');

root.appendChild(dom);