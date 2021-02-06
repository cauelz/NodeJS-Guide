const path = require('path');
console.log(path.dirname(require.main.filename));
console.log(__dirname, __filename)
console.log(require.main.filename)
console.log(path.join(path.dirname(require.main.filename), 'data'))
