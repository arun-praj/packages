#! /usr/bin/env node

const { execSync } = require('child_process')
const { log } = require('console')

const runCommand = (command) => {
   try {
      execSync(`${command}`, { stdio: 'inherit' })
   } catch (e) {
      console.error(`Failed to execute ${command}`, e)
      return false
   }
   return true
}

const repoName = process.argv[2]

const cloneRepo = `git clone --depth 1 --branch next-starter https://github.com/arun-praj/packages.git ${repoName}`

const c = `cd ${repoName}`

console.log('Clonning...')

const cloned = runCommand(cloneRepo)
if (!cloned) {
   console.error(`Failed to clone https://github.com/arun-praj/packages.git`)
   process.exit(-1)
}

console.log(`Installing dependencies...`)
runCommand(`cd ${repoName}`)
const installed = runCommand(installDependencyCmd)

if (!installed) {
   console.error(`Failed to install npm dependencies`)
   process.exit(-1)
}
console.log('\n\n')
console.log('Setup complete !!!')
console.log('\n\n')

console.log(`1. cd ${repoName} \n2. npm run dev`)
