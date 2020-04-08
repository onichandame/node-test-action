import { exec } from '@actions/exec'

import options from './option-helper'

export const installDeps = async (): Promise<void> => {
  if (await exec('yarn', [], options) !== 0) {
    throw new Error('installing dependencies failed')
  }
}
export default installDeps
