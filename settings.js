/* 
BASE BY SKYZO 
DEVELOP BY Cello
=============CONTACT===============
          WA:6283140956492
          TELE:t.me/Kyyslow
          YT:Cello
          CH¹:https://whatsapp.com/channel/0029VakAHSOKLaHnxS6tII0i
          CH²:https://whatsapp.com/channel/0029VaojVzr3LdQWWTEIKr13
====================================
HAPUS CREDIT?, DOSA GW BUAT LU THANKS
*/

const fs = require('fs');
const chalk = require('chalk');

// Settings 
global.owner = '6283140956492'
global.versi = "2.0"
global.namaOwner = "Cello"
global.packname = 'Cello'
global.botname = 'CellXz'
global.botname2 = 'CellXz'
global.storename = 'CellXz STORE'
global.copyright

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 10000
global.idjpmch = [""]//Tambahin Id Salurannya/ubah id salurannya

// Settings All Payment
global.dana = "6283140956492"// kalo gaada tulis false
global.idana = "Kyxxx"//Inisial Dana
global.ovo = "Tidak Tersedia"// kalo gaada tulis false
global.iovo = "Kyxxx"//Inisial Ovo
global.gopay = "Tidak Tersedia"// kalo gaada tulis false
global.igopay = "Kyxxx"//Inisial Gopay
global.qris = ""// isi dengan qris lu

global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!\nCello",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!\nCello",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!\n#Cello",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!#Cello",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!\n#Cello",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!\n#Cello",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})