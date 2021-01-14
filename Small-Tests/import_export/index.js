import { sayHi } from './func.js'

sayHi() 

// https://www.youtube.com/watch?v=s9kNndJLOjg checking what's wrong..

// Had an error: 
// index.html:1 Access to script at 'file:///Users/stanislav/VisualStudioProjects/JavaScript_learning_and_practicing/Small-Tests/import_export/index.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
// Until launch index on server 
// https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local
// So even though your file originates from the same host (localhost), but as long as the scheme is different (http / file), they are treated as different origin.
// I see ;) Thanks Andreas Wong. 8 years ago.. :) 

// Had an error #2.
// If using - import { sayHi } from './func'. SayHi is highlighted, but leads to error. without .js
// GET http://127.0.0.1:5500/Small-Tests/import_export/func net::ERR_ABORTED 404 (Not Found)