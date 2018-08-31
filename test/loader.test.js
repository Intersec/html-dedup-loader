const tape = require('tape');
const loader = require("../");

tape.test('should apply html-loader', (t) => {
    t.equal(loader('<b>Toto</b>'),
               'module.exports = "<b>Toto</b>";');

    t.end();
});

tape.test('should not apply html-loader twice', (t) => {
    t.equal(loader(loader('<b>Toto</b>')),
               'module.exports = "<b>Toto</b>";');

    t.end();
});
