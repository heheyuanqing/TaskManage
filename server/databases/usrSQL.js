const usrSQL = {
    getPsw: 'select * from usr where usrName=?',
    getEmail: 'select email from usr',
    addUsr:'insert into usr (usrName,email,psw) value (?,?,?)'
};

module.exports=usrSQL;