export const POMODORO_INTERVAL = 'POMODORO_INTERVAL'
export const SHORT_BREAK = 'SHORT_BRAKE'
export const LONG_BREAK = 'LONG_BREAK'
export const POMODOROS = 'POMODOROS'

export const pomodoro_interval = (el) => ({
    type: POMODORO_INTERVAL,
    el
})

export const short_break = (el) => ({
    type: SHORT_BREAK,
    el
})

export const long_break = (el) => ({
    type: LONG_BREAK,
    el
})

export const pomodoros = (el) => ({
    type: POMODOROS,
    el
})