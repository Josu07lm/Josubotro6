let handler = async m => m.reply(`
β­βγ πΊπππππππ γ
β β’ πππ¦πππ [paypal.me/samu330]
β β’ Pero con que te suscribas a mi canal basta:)
β https://www.youtube.com/watch?v=chMc57gjmkI&t=88s
β°ββββ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
