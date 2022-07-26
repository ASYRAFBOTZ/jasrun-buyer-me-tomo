const qrku = "https://telegra.ph/file/1ed41bbeb07051546088e.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 SEWABOT 」
│ • 30 Day /15K
│ • 60 Day /25k
│ • Permanen /50k
╰────
╭─「 *PAYMEBT* 」
│ BNI, Pulsa, Dana
╰───
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['sewa', 'sewabot']
handler.tags = ['about']
handler.command = /^sewa(bot)$/i

module.exports = handler
