#! /usr/bin/env node

const { execSync } = require('child_process')

const runCommand = (command) => {
   try {
      execSync(`${command}`, { stdio: 'inherit' })
   } catch (e) {
      console.error(`Failed to execute ${command}`, e)
   }
}

const repoName = process.argv[2]

const gitCheckoutCommand = `git clone --depth 1 --branch next-starter https://github.com/arun-praj/packages.git ${repoName}`

const installDependencyCmd = `cd ${repoName} && npm install`

console.log(`Cloning ${repoName}`)

const checkedOut = runCommand(gitCheckoutCommand)

if (!checkedOut) {
   process.exit(-1)
}

console.log(`Installing dependencies ${repoName}`)
const installed = runCommand(installDependencyCmd)

if (!installed) {
   process.exit(-1)
}

console.log('Completed setup')
console.log(`cd ${repoName}  then npm run dev`)
