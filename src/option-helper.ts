import { exec } from '@actions/exec'

import { getEnv } from './input-helper'

export const options: Parameters<typeof exec>[2] = {
  cwd: getEnv('GITHUB_WORKSPACE')
}
export default options
