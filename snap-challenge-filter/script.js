
//var testFilter = [{ "Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence." },

//document.getElementById("target").innerHTML = participants.map(e => e.name + " -> " + e.age).join(', ');


//function myFunction() {
	//var result = participants.filter(sentences => sentences.e > e);
	//document.getElementById("target").innerHTML = result.map(e => e.name + " -> " + e.age).join(', ');





//const words = ["Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence."];

//function filterText

//console.log(result);


//function beginsWithE(const words = ["Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence."];
//) {
//	return value >= letterE
//}

//const filtered = const words = ["Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence."];
//.filter(beginsWithE)


//georges answer
const words = "Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact!" +
" What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a" +
" promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a" +
" seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that" +
"bring about chaos? Flair is what marks the difference between artistry and mere competence."

	const wordsArray = words.split(" ")

	const filteredArray = wordsArray.filter((word) => {
		console.log('word',word,word[0] !== "e")
		return word[0] !== "e"
		return word[0].toLowerCase() !== "e".toLowerCase()
})

console.log(filteredArray)