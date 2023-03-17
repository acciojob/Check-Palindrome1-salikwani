// complete the given function

function palindrome(str){
	var new;
	for(var i=str.length-1;i>=0;i--) {
		new += str[i];
	}
	return str == new;
}
module.exports = palindrome
