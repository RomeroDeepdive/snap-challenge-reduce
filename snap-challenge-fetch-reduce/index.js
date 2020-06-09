//function fetchIpsum () {
	//const targetElement = document.getElementById('target')
	//fetch('https://jsonplaceholder.typicode.com/todos')
		//.then(reply => (reply.json()))
		//.then(body => {
			//let accumulator = '';
//fetch('https://jsonplaceholder.typicode.com/todos')
			//body.forEach(index => {
				//accumulator = `
          //  ${accumulator}
            //<p>${index}</p>
          //`
			//})

			//targetElement.innerHTML = accumulator
		//})
//}


function fetchIpsum () {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(rawResponse => rawResponse.json())
		.then(response => {
			const formattedResponse = response.reduce((accumulator, currentValue) => {
				 return `${accumulator} <h3>${currentValue.title}</h3>`
			}, "")
console.log(formattedResponse)
			document.getElementById("target").innerHTML = formattedResponse
		})
}

fetchIpsum()

