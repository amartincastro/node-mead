const getNotes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')

//customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title, 'Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing all notes!')
    }
})


// add, remove, read, list all notes
// options to pass in data. 

yargs.parse()
