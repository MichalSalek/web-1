import { isStringTypeNarrower } from '@msalek/utils'
import { RAW_ENV_VARS_NOT_USE } from './environment.config'




export const IS_DEVELOPMENT_ENV = (): boolean => process.env.NODE_ENV === 'development'

export const IS_PRODUCTION_ENV = (): boolean => process.env.NODE_ENV === 'production'

export const GET_ENV_VARS = () => {
  const valuesArray: (string | undefined)[] = Object.keys(RAW_ENV_VARS_NOT_USE)

  if (valuesArray.every(value => isStringTypeNarrower(value))) {
    return RAW_ENV_VARS_NOT_USE
  } else {
    console.error('WARNING')
    console.warn('WARNING')
    console.error('WARNING')
    console.warn('WARNING')
    throw new Error('!!! NOT VALID ENV CONFIG !!!')
  }
}

export const ENV_VARS = GET_ENV_VARS()
