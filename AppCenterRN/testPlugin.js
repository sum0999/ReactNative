module.exports = function({ types: t }) {
return {
name: 'testPlugin',
visitor: {
MemberExpression(path) {
console.log(process.env['SOME_ENV_VARIABLE_FROM_APP_CENTER'])
},
},
};
};
