const cp = require('child_process');
const path = require('path');
const rimraf = require('rimraf')

rimraf(path.resolve(process.cwd(), './es'), err => {
    if(err) return;

    
    cp.execSync(`rollup -c ${path.resolve(__dirname, '../rollup.config.js')}`);
});

