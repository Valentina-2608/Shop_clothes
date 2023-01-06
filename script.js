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
