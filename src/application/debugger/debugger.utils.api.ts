import { debuggerStates } from './debugger.state'




export const __debuggerGate = (evalOnDebugMode: () => void): void => {
  if (debuggerStates.isEnabledDebugMode) {
    evalOnDebugMode()
  }
}


export const __debuggerGateDBLeaks = (evalOnDebugMode: () => void): void => {
  if (debuggerStates.isEnabledDBLeaksDebugger) {
    evalOnDebugMode()
  }
}


export const __debuggerTemporaryLogs = (evalOnDebugMode: () => void, logSign: string): void => {
  console.log('')
  console.log('')
  console.log('')
  console.log(' TEMPORARY DEBUGGING ')
  console.log('')
  console.log(logSign.toUpperCase())
  console.log('')
  console.log('')
  evalOnDebugMode()
  console.log('')
  console.log('')
  console.log(' TEMPORARY DEBUGGING END')
  console.log('')
  console.log('')
  console.log('')
}
