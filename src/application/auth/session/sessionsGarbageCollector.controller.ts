type SessionControllerType = {
  // NEXT_CHECK_TIME_IN_SECONDS: number,
  // nextCheck: DateApplication
  // init: () => Promise<void>
}

export const SessionsGarbageCollectorController: SessionControllerType = {
  //
  // NEXT_CHECK_TIME_IN_SECONDS: 600,
  //
  // nextCheck: dateApplication(),
  //
  //
  //
  //
  // init: async () => {
  //
  //   if (nowDateIsSameOrBeforeThanPassed(SessionsGarbageCollectorController.nextCheck)) {
  //     return void undefined
  //   }
  //   SessionsGarbageCollectorController.nextCheck = dateApplication()
  //     .add(
  //       SessionsGarbageCollectorController.NEXT_CHECK_TIME_IN_SECONDS,
  //       'second')
  //
  //
  //   __debuggerGate(() => console.log('SessionGarbageCollectorController run.'))
  //   await checkAllSessionsAndDeactivateIfNeeded()
  //
  // }
}

// @TODO czyszczenie sesji na razie wstrzymane - trzeba ustalić sygnały, które mają go wywoływać (na pewno nie interwały).
