const usrSQL = {
    getName: 'select usrName from usr',
    getPsw: 'select psw from usr',
    getEmail: 'select email from usr',
    addUsr:'insert into usr (usrName,email,psw) value (?,?,?)'
};

module.exports=usrSQL;