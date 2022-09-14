//Different Ways to Call the Search Form
//const form = document.forms[0];
//const form = document.getElementByTagName('form')[0];
//const form = document.forms.search;
const form = document.forms['search'];

//Different ways to get the inputs from the form
//const [input, button] = form.elements;
//const input = form.searchInput;
//const input = form['searchInput'];

//Method to submit the form automatically
//form.submit();

//Method to clear all the input fields
//CAUTION use carefully
//form.reset();

//Used to set the action attribute of a form
//form.action();

const input = form.elements.searchInput;

//Triggering Events specific to HTML forms
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

//Event to submit the form
form.addEventListener('submit', search, false);

//setting the value of the input element
input.value = "Search Here";

input.addEventListener('focus', function(){
	if(input.value === "Search Here"){
		input.value = '';
	}
}, false);

input.addEventListener('blur', function(){
	if(input.value === ''){
		input.value='Search Here';
	}
}, false);

function search(event) {
	//alert('Form Submitted');
	var inputValue = input.value;
	alert('You searched for: ' + inputValue);
	//Stops the from from submitting the URL
	event.preventDefault();
}
