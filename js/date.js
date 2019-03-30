const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) { 
let user = [];
users.forEach(function(item){
	let user_month = new Date(item.birthday).getMonth();
	if(user_month==month){
		user.push(item);
	}
})

return user;



}
filterUsersByMonth(users, 0); // [{ name: 'Bill', birthday: '1999-1-19' }]