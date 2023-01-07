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
let btn_all = document.querySelector('.btn_all');
let btn_dress = document.querySelector('.btn_dress');
let btn_top = document.querySelector('.btn_top');
let btn_sweater= document.querySelector('.btn_sweater');
let btn_jackets = document.querySelector('.btn_jackets');


/* function showDresses */

btn_dress.addEventListener('click', showDresses);
function showDresses(){
	checkButton(btn_dress);
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
	checkButton(btn_top);
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
	checkButton(btn_sweater);
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
	checkButton(btn_jackets);
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
	checkButton(btn_all);
	let cards = document.querySelectorAll('.card');
	for(let card of cards){
			card.style.display = 'block';
			products.style.height = '1850px';
		}
}




/* function, which add and remove class */

function checkButton(btn){
	let buttons = document.querySelectorAll('button');
		for(let button of buttons){
			if (button.classList.contains('btn_active')){
				button.classList.remove('btn_active');
				btn.classList.add('btn_active');
			}
	}
}