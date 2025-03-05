import { en, es, id, ar, pt, de ,it } from '../lib/idiomas/total-idiomas.js'  
export async function before(m, { conn }) {
global.wait = lenguajeGB['smsMeWait']()
global.wait2 = lenguajeGB.smsWait()
  
let user = global.db.data.users[m.sender]


} else if (user.GBLanguage == 'ar') {
global.lenguajeGB = ar
} 
}
}
