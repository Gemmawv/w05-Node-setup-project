const fs = require('fs');
// const gitIgnore = require('./.gitIgnore')

// check new project name doesn't already exist
// create new folder on desktop with new project name
// create README file
// create index.js file
// create spec folder
// create spec file
// create package.json file 
// create .gitignore file - use readfile?
// create node modules (and auto run npm install)
// create eslint file


// - to check if a file already exists


// if (!fs.stat('../new_project', function (err) {
//     if (err) throw err;
// })) {
    fs.mkdir('../new_project', function (err) {
        if (err) {
            return console.error(err);
        }
        fs.writeFile('../new_project/README.md', 'Hey, this is a new project!', function (err) {
            if (err) throw err;
            console.log('The README.md file has been saved!');
        });
        fs.writeFile('../new_project/index.js', 'w', function (err) {
            if (err) throw err;
            console.log('The index.js file has been saved!');
        });
        fs.readFile('./.gitignore_template', function (err, data) {
            if (err) throw err;
            fs.writeFile('../new_project/.gitignore', data, function (err) {
                if (err) throw err;
                console.log('The gitignore file has been saved!');
            });
        });
        fs.mkdir('../new_project/spec', function (err) {
            if (err) {
                return console.error(err);
            }
            fs.writeFile('../new_project/spec/index.spec.js', 'Hey, this is a new project!', function (err) {
                if (err) throw err;
                console.log('The spec.js file has been saved!');
            });
            console.log('New spec directory created successfully!');
        });
        console.log('New project directory created successfully!');
    });
// }


// fs.open('<directory>', 'a+', (err, fd) => {
// });



// node_modules
// */**/node_modules
// .DS_Store
// */**/.DS_Store
// *.log
// */**/*.log
// .vscode
// */**/.vscode
// */**/.idea/*
// .idea/*
// bundle.js
// bundle.js.map
// **/*/bundle.js
// **/*/bundle.js.map