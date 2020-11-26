const path = require('path');



export default {
    input: [path.resolve(process.cwd(), './src/index.js')],
    output: {
        file: './es/index.js',
        format: 'es',
        name: 'zkj',
    }
}