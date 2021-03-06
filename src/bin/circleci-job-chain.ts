#!/usr/bin/env node

import { poller, IOptions } from '../lib/poller'
import * as argv from 'yargs'

let cliArgs = argv.demandOption(['organization','project','circle-token'])
                  .argv

const options: IOptions = {
  organization: cliArgs.organization,
  project: cliArgs.project,
  branch: cliArgs.branch || 'master',
  circleToken: cliArgs ['circle-token'],
  pollInterval: cliArgs ['poll-interval'],
  buildOptions: cliArgs.buildOptions,
  errorThreshold: cliArgs.errorThreshold || 5
}

poller(options).catch(console.log)
