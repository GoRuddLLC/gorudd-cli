#!/usr/bin/env node

const { program } = require('commander')
const path = require('path')
const fs = require('fs')
program
  .version("GoRudd CLI Version Beta 1")
  .description("The Offical CLI For GoRudd.com")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    console.log(options)
    console.log(`Hey, ${options.name}!`);
  })

program
  .command('new <project_name>')
  .description('Creates a boilerplate for a new GoRudd template')
  .action((options)=>{
    let PROJECT_NAME = options
    console.log("[ GoRudd ]\tCreating new template \""+PROJECT_NAME+"\"")
    let PROJECT_DIR = path.resolve('.') + "\\" + PROJECT_NAME
    if(!(fs.existsSync(path.resolve('.') + "\\" + PROJECT_NAME))){
        fs.mkdir(path.resolve('.') + "\\" + PROJECT_NAME, ()=>{})
        fs.writeFile(`${PROJECT_DIR}\\.grfile`, `TEMPLATE=${PROJECT_NAME}\nVERSION=1.0.0\nENTRY=main.js`, ()=>{
            console.log("[ GoRudd ]\tInit Completed")

        })
    }
    else
    {
        console.log("[ GoRudd ]\tError creating \""+PROJECT_NAME+"\":\tExists")
    }


  })
program.parse(process.argv);