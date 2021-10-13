/*let cours = 'hello' ; 
console.log(cours + ' Alexandre')

cours = 'bonjour'
console.log(cours + ' Alexandre')
*/

/*fonctions
function a(){
	console.log('bonjour');	
}

const b = (type) => { console.log('je fais' + type);}


a();
b(5);*/

//images
const btn = document.querySelector('#btn')
const img = document.getElementById('img')

btn.addEventListener('click' , () => {
	console.log(' it is done'); 
	img.classList.toggle('show')
	//alert('changement')
})

//Partie souris 

const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

mouseEvent.addEventListener('mousemove', (e) => {
	//console.log(e);
	horizontal.innerHTML = e.x ; 
	vertical.innerHTML = e.y ; 
	mouseEvent.style.left = e.x / window.innerWidth * 100 + "%" ;
	if(e.x > 700){
		document.body.style.filter = "blur(3px)"; //rajoute de flou dès le dépassement de 500px
	}
	else {
		document.body.style.filter = "blur(0px)";
		//document.body.style.filter = "none";  même effet que la ligne du haut 
	}
})
// ***********************************************************
document.getElementById('input').addEventListener('input',(e) => {
	//console.log(e.target.value);
		vertical.innerHTML = e.target.value ; 
})

//***************************************************************

const theme = document.querySelectorAll('.theme');
const dark = document.querySelector('.dark');
const purple = document.querySelector('.purple');
const red = document.querySelector('.red');

theme.forEach((item) => {
	item.addEventListener('click' , (e) => {
		console.log(e);
	})
})