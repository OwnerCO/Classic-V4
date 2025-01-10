require("./doc/module.js")

/*

# Base By 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
# Owner ? : 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
!- do not delete this credit

*/

global.prefix = ['','!','.',',','馃悿','馃椏']
global.owner = ['51960285930']
global.ownMain = '51960285930'
global.NamaOwner = '𝐒𝐘𝐒𝐒𝐎𝐋𝐔𝐓𝐈𝐎𝐍𝐒' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = '𝐒𝐘𝐒𝐒𝐎𝐋𝐔𝐓𝐈𝐎𝐍𝐒' //
global.author = '𝐒𝐘𝐒𝐒𝐎𝐋𝐔𝐓𝐈𝐎𝐍𝐒' //
global.packname = '𝐒𝐘𝐒𝐒𝐎𝐋𝐔𝐓𝐈𝐎𝐍𝐒' //
global.url1 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //
global.url2 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //
global.linkgc = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
