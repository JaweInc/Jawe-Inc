document.getElementById('btn').addEventListener('click', getTxt);

document.getElementById('btn').addEventListener('click', function myIptSearch(){


var main, inputData;

main = document.getElementById('main');

main.innerHTML = "";

inputData = document.getElementById('inputData').value;


	try{

		if(inputData == "") throw "input box is empty, input a character";

		if(String(inputData)) throw inputData;

	}

	catch(err){

		main.innerHTML = "You:" + "<hr />" + err;
		main.style.padding = "20px";
		main.style.transition = "0.5s";

	}

})

function getTxt(){

	const inputData = document.getElementById('inputData').value;



	const content = document.getElementById('content');
	
	fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=' + inputData, { 
	
	method: 'GET',

	headers: {

		'Accept': 'application/json, text/plain, */*',
		'content-type': 'application/json' 
	},

})
	 .then(response => response.json())
	 .then(data => {

		const output = data.query.search;

		for(i = 0; i < output.length; i++)

		content.innerHTML += "<h3>" + output[i].title + "</h3>" + " <hr />" + output[i].snippet;

		content.style.padding = "40px";

		content.style.transition = "0.5s";


	})
 
}