const fs = require('fs');
const exec = require('child_process').exec;

// check new project name doesn't already exist
// create new folder on desktop with new project name
// create README file
// create index.js file
// create spec folder
// create spec file
// create package.json file 
// create .gitignore file
// create node modules (and auto run npm install)
// create eslint file


fs.mkdir('../new_project', function (err) {
    if (err) {
        return console.error(err);
    }
    exec('cd ../new_project && npm init -y && npm install -D mocha chai eslint', function (err) {
    if (err) throw err;
    });
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

