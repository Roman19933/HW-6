const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) { 
const nowDate = new Date().getFullYear();
let arrUser= [];
users.forEach(function(item){
	const userBirt = new Date(item.birthday).getFullYear();
	const isAdult = nowDate - userBirt;
	if(isAdult>18){
		arrUser.push(item.name, isAdult)
	}
})
		return arrUser.join(", ");

}
getAdultNames(users); // 'John 19, Luce 18'