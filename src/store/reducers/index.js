import { POMODORO_INTERVAL,SHORT_BREAK, LONG_BREAK,  POMODOROS} from '../actions'

const localPomodoro = JSON.parse(localStorage.getItem('pomodoroState'))

const initialState = {
    pomodoroInterval: 25,
    shortBreak: 5,
    longBreak: 10,
    pomodoros: 4,
}

export const rootReducer = (state = localPomodoro ? localPomodoro : initialState, action) => {

    switch(action.type) {
        case POMODORO_INTERVAL :  
            return {
                ...state,
                pomodoroInterval: parseInt(action.el.pomodoroInterval)
            }

            case SHORT_BREAK : 
            return {
                ...state,
                shortBreak: parseInt(action.el.shortBreak)
            }

            case LONG_BREAK : 
            return {
                ...state,
                longBreak: parseInt(action.el.longBreak)
            }

            case POMODOROS : 
            return {
                ...state,
                pomodoros: parseInt(action.el.pomodoros)
            }

        default:
            return state
    }
}