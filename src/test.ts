import { exec } from '@actions/exec'
import options from './option-helper'

export const test = async ():Promise<void> => {
  if (await exec('yarn', ['test'], options) !== 0) {
    throw new Error('test failed')
  }
}
export default test
