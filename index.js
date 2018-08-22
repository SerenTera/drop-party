module.exports = function teracmd(mod) {
	mod.command.add('dropparty', () => {  //fuck drop module
		mod.send('C_LEAVE_PARTY',1,{})
	})
}