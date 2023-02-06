// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getnotes = require('./notes')
 
// customize Yargs Version 1.1.0
yargs.version('1.1.0')

// creating a add command 
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    handler : function(){
        console.log('Adding a new note!');
    }
})

// creating a remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    handler : function(){
        console.log('Removing a note!');
    }
})

// creating a list command
yargs.command({
    command : 'list',
    describe : 'List all notes',
    handler : function(){
        console.log('Listing out all notes!');
    }
})

// creating a read command
yargs.command({
    command : 'read',
    describe : 'Reading all notes',
    handler : function(){
        console.log('Reading out all notes!');
    }
})



// add, remove, read, list
console.log(yargs.argv);