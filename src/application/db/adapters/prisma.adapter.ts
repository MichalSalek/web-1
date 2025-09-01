import {Prisma, PrismaClient} from '../../../prisma/js-client'
import {debuggerStates} from '../../debugger/debugger.state'


const prismaDebugConfig: Prisma.Subset<Prisma.PrismaClientOptions, Prisma.PrismaClientOptions> = debuggerStates.isEnabledDBLeaksDebugger
  ? {
    log: [{
      emit: 'stdout',
      level: 'query'
    },
      {
        emit: 'stdout',
        level: 'error'
      },
      {
        emit: 'stdout',
        level: 'info'
      },
      {
        emit: 'stdout',
        level: 'warn'
      }]
  }
  : {}


const prismaConfig: Prisma.Subset<Prisma.PrismaClientOptions, Prisma.PrismaClientOptions> = {
  errorFormat: 'pretty', ...prismaDebugConfig
}

// https://github.com/prisma/prisma/issues/1983
// FATAL:  sorry, too many clients already


declare global {
  // eslint-disable-next-line no-var
  var globalPrisma: PrismaClient
}

let dbClient: PrismaClient

if (process.env.NODE_ENV === 'production') {
  dbClient = new PrismaClient(prismaConfig)
} else {
  if (!global.globalPrisma) {
    global.globalPrisma = new PrismaClient(prismaConfig)
  }

  dbClient = global.globalPrisma
}


// const dbClient = new PrismaClient(prismaConfig)
//
export const DB_CLIENT_PRISMA = {
  use: dbClient
}
