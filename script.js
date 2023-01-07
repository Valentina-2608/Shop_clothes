/* Script */

/* Creating new element */

function createCard(elem, elem_image, elem_caption, elem_price){
	let parent = document.getElementById('products');	
	let new_card = document.createElement('div');
	new_card.classList.add('card');
	parent.appendChild(new_card);
	
	/* Add image */
    let card_image = document.createElement('img');
    card_image.classList.add('card_image');
    card_image.src = elem_image;
    new_card.appendChild(card_image);
	
	/* Add caption */
	let card_caption = document.createElement('div');
	card_caption.classList.add('card_caption');
    card_caption.innerHTML = elem_caption;
	new_card.appendChild(card_caption);
	
	/* Add price */
	let card_price = document.createElement('div');
    card_price.classList.add('card_price');
	card_price.innerHTML = elem_price;
	new_card.appendChild(card_price);
}	




/* function load */
function load(){
	for(let good of goods){
	 	createCard(good, good.image, good.caption, good.price)
}
}


let products  = document.getElementById('products');
let btn_all = document.getElementById('btn_all');
let btn_dress = document.getElementById('btn_dress');
let btn_top = document.getElementById('btn_top');
let btn_sweater= document.getElementById('btn_sweater');
let btn_jackets = document.getElementById('btn_jackets');


/* function showDresses */

btn_dress.addEventListener('click', showDresses);
function showDresses(){
	let cards = document.querySelectorAll('.card');
	for(let card of cards){
		if(card.innerHTML.includes('Dress')){
			card.style.display = 'block';
			products.style.height = '1100px';
		}else{
			card.style.display = 'none';
		}
	}
}


/* function showTops */

btn_top.addEventListener('click', showTops);
function showTops(){
	let cards = document.querySelectorAll('.card');
	for(let card of cards){
		if(card.innerHTML.includes('Top')){
			card.style.display = 'block';
			products.style.height = '1100px';
		}else{
			card.style.display = 'none';
		}
	}
}



/* function showSweaters */

btn_sweater.addEventListener('click', showSweaters);
function showSweaters(){
	let cards = document.querySelectorAll('.card');
	for(let card of cards){
		if(card.innerHTML.includes('Sweater')){
			card.style.display = 'block';
			products.style.height = '1100px';
		}else{
			card.style.display = 'none';
		}
	}
}



/* function showJackets */

btn_jackets.addEventListener('click', showJackets);
function showJackets(){
	let cards = document.querySelectorAll('.card');
	for(let card of cards){
		if(card.innerHTML.includes('Jacket')){
			card.style.display = 'block';
			products.style.height = '1100px';
		}else{
			card.style.display = 'none';
		}
	}
}



/* function showAll */

btn_all.addEventListener('click', showAll);
function showAll(){
	let cards = document.querySelectorAll('.card');
	for(let card of cards){
			card.style.display = 'block';
			products.style.height = '1850px';
		}
}
