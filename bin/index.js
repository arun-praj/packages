#! /usr/bin/env node

const { execSync } = require('child_process')
const { log } = require('console')

const runCommand = (command) => {
   try {
      execSync(`${command}`, { stdio: 'inherit' })
   } catch (e) {
      console.error(`Failed to execute ${command}`, e)
   }
}

const repoName = process.argv[2]

const cloneRepo = `git clone --depth 1 --branch next-starter https://github.com/arun-praj/packages.git ${repoName}`

const c = `cd ${repoName}`

const cloned = runCommand(cloneRepo)

if (!cloned) {
   console.error(`Failed to clone https://github.com/arun-praj/packages.git`)
   process.exit(-1)
}

console.log(`Installing dependencies ${repoName}`)
runCommand(`cd ${reponame}`)
const installed = runCommand(installDependencyCmd)

if (!installed) {
   console.error(`Failed to install npm dependencies`)
   process.exit(-1)
}

console.log('Completed setup')
console.log('\n\n')

console.log(`1. cd ${repoName} \n2. npm run dev`)
