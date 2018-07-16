const Command = require('command')



module.exports = function teracmd(dispatch) {
	const command = Command(dispatch)
	
	command.add('dropparty', () => {  //fuck drop module
		dispatch.send('C_LEAVE_PARTY',1,{})
	})


}