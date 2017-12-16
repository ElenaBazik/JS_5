'use strict'

document.getElementById('submit').addEventListener('click', function(e){
	const user = {
		name : document.getElementById('name').value.trim(),
		surname : document.getElementById('surname').value.trim(),
		pass : document.getElementById('password').value,
		mail : document.getElementById('email').value.trim(),
	}

	if (user.name == '') {
        alert('Введите имя!');
        return false;
    } else if (user.surname == '') {
        alert('Введите фамилию!');
        return false;
	} else if (user.mail == '') {
		alert('Введите e-mail!');
	    return false;
    } else if (user.pass.length < 5) {
        alert('Пароль слишком короткий!');
        return false;
    }
    var userMail = user.mail.indexOf('@');
    if (userMail == -1) {alert('Пропустили @');
        return false;
	};
	userMail++;

    for (userMail; userMail < user.mail.length; userMail++) {
        if (~user.mail.indexOf('@', userMail)) {
            alert('Некорректно ввели адрес!');
            return false;
        }
    }
    var outForm = document.getElementById('formTasck5');
    outForm.innerHTML ='Вы зарегистрированны!';
});
