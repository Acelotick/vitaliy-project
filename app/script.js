const app = require('./app')

//------ test code
app.addCommand('test', true, (args, raw, defraw) => {
    console.log('test')
})

app.addCommand('erase', true, (args, raw, defraw) => {
    app.eraseCommands()
    app.eraseCloseCommands()
    console.log('all functions erased')
})

console.log('started')

app.addCloseCommand(() => {
    console.log('closed')
    process.exitCode = 0

    setTimeout(() => {
        console.log('force exit')
        process.exit()
    }, 500)
})
