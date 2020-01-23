const title = 'Hello World'
const myTemplate = '<h1>' + title + '</h1>'

console.log(myTemplate)

///////////////////////////////////////////////////////////

const myTemplateNew = `<h1>${title}</h1>`

console.log(myTemplateNew)

///////////////////////////////////////////////////////////
 
const isVisible = () => Math.random() > 0.5

console.log(isVisible())

const myTemplateWithCondition = `${isVisible() ? '<p>Visible</p>': ''} <h1>${title}</h1>`

console.log(myTemplateWithCondition)