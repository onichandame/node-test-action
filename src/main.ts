import * as core from '@actions/core'

import installDeps from './deps'
import runTest from './test'
import options from './option-helper'

async function run ():Promise<void> {
  try {
    core.info(`running test in ${options!.cwd}`)
    core.info('installing dependencies')
    await installDeps()
    core.info('running test')
    await runTest()
    core.info('test passed')
  } catch (e) {
    core.setFailed(e.message ? e.message : JSON.stringify(e))
  }
}

run()
