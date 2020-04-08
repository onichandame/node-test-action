import core from '@actions/core'
import installDeps from './deps'
import runTest from './test'

async function run ():Promise<void> {
  try {
    await installDeps()
    await runTest()
    core.info('test passed]')
  } catch (e) {
    core.setFailed(e.message ? e.message : JSON.stringify(e))
  }
}
