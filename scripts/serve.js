// 0. Clone skyux2 repo into a temp folder
// 1. Install dependencies and build modules
// 2. Copy the dist folder to the node_modules
// 3. Run skyux serve

const spawn = require('cross-spawn');
const path = require('path');
const fs = require('fs-extra');

const url = 'https://github.com/blackbaud/skyux2.git';
const dir = '.skyuxtmp';

fs.mkdirSync('./.skyuxtmp');

spawn.sync('git', [
  'clone',
  '--branch',
  'remove-docs',
  url
], {
  stdio: 'inherit',
  cwd: dir
});

spawn.sync('npm', ['install'], {
  stdio: 'inherit',
  cwd: path.join(dir, 'skyux2')
});

spawn.sync('npm', ['run', 'build'], {
  stdio: 'inherit',
  cwd: path.join(dir, 'skyux2')
});

fs.copySync(
  path.join(dir, 'skyux2', 'dist'),
  path.join('node_modules', '@blackbaud', 'skyux')
);

spawn.sync('skyux', ['serve']);
