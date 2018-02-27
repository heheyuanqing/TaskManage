const usrSQL = {
    getUsrInfor: 'select * from usr where usrName=?',
    addUsr:'insert into usr (usrName,email,psw) values (?,?,?)'
};

module.exports=usrSQL;