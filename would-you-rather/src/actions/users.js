import '../_DATA'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function getUsers (user) {
    return {
        type: RECEIVE_USERS,
        user,
    }
}
