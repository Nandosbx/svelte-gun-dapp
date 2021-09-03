import GUN from 'gun'
import 'gun/sea'
import 'gun/axe'

//DB
export const db= GUN()

export const user = db.user().recall({sessionStorage: true})