// the request module allows us to make server side API calls
var request = require('request');

// Using Promises alone
function getMovieWithPromises(title) {
    return new Promise(function (resolve, reject) {
        request(`http://www.omdbapi.com/?t=${title}`, function (err, res, body) {
            if (err) {
                reject(err);
            }
            resolve(body);
        });
    });
}


function showDataWithPromises(title) {
    getMovieWithPromises(title).then(function (data) {
        console.log("movie loaded!");
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    })
}

showDataWithPromises("Titanic");

// Using Async Functions

// make use of the previously defined getMovieWithPromises since async 
// functions return a Promise
async function showDataWithAsync(title) {
    var data = await getMovieWithPromises(title);
    console.log(data);
}

// since async functions return a promise we can even chain them if we'd like!
showDataWithAsync("Titanic").then(function (data) {
    console.log("movie loaded!");
    console.log(data);
}).catch(function (err) {
    console.log("Something went wrong!", err);
})

// We can operate on the result of these functions just like with Promises
Promise.all([showDataWithAsync("Titanic"), showDataWithAsync("Ghostbusters")])
    .then(function (data) {
        console.log(data);
    });
