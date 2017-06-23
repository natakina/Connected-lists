const css = require('./style.css');

const addButton = document.getElementById('add_btn');
addButton.onmousedown = () => addButton.style.boxShadow = "none";
addButton.onmouseup = () => addButton.style.boxShadow="3px 2px 1px 0px rgba(0,0,0,0.75)";

const categoryList = document.querySelector('ul.category_list');
const itemList = document.querySelector('ul.item_list');

const addItemForm = document.getElementById('add_item_form');
const inputs = document.querySelector('.text_inputs');
const categoryInput = document.getElementById('category_input');
const itemInput = document.getElementById('item_input');

const categoryWarnMessage = document.createElement('p');
categoryWarnMessage.className = 'warn_message';
categoryWarnMessage.id = 'category_message';
categoryWarnMessage.style.display = 'none';
inputs.insertBefore(categoryWarnMessage, categoryInput);

const itemWarnMessage = document.createElement('p');
itemWarnMessage.className = 'warn_message';
itemWarnMessage.id = 'item_message';
itemWarnMessage.style.display = 'none';
inputs.insertBefore(itemWarnMessage, itemInput);

const items = [];

let listData = new Map([
  ['Category 1', ['1','2']],
  ['Category 2', ['3','4','5']],
  ['Category 3', ['6']]
]); 


function drawElements(categoryList, itemList) {
	categoryList.innerHTML = '';
	itemList.innerHTML = '';
	for (let entry of listData) {
		const category = entry[0];
		const itemsInCategory = entry[1];
		const newCategory = document.createElement('li');
		newCategory.innerHTML = '<span class="category_name">' + category + '</span><div class="delete_btn">x</div>';
		categoryList.appendChild(newCategory);

		for (let i = 0; i < itemsInCategory.length; i++) {
			items.push(itemsInCategory[i]);
			const newItem = document.createElement('li');
			newItem.innerHTML = '<span class="category_name">' + category + '</span>: ' + '<span class="item_name">' + itemsInCategory[i] + '</span><div class="delete_btn">x</div>';
			itemList.appendChild(newItem);
		}	
	}
}

function addListItem(categoryInput, itemInput, categoryWarnMessage, itemWarnMessage) {
	if (categoryInput.value && itemInput.value){	
		categoryWarnMessage.style.display = 'none';
		itemWarnMessage.style.display = 'none';				

		if (items.indexOf(itemInput.value) == -1) {
			items.push(itemInput.value);
			
			if (!listData.has(categoryInput.value)) {
				listData.set(categoryInput.value, [itemInput.value]);
					
			} else {
				listData.get(categoryInput.value).push(itemInput.value);
			}

			drawElements(categoryList, itemList);

			categoryInput.value = '';
			itemInput.value = '';		

		} else {
			itemWarnMessage.innerHTML = 'The item name must be unique';
			itemWarnMessage.style.display = 'block';
		}	
		
	} else {
		if (categoryInput.value) {
			categoryWarnMessage.style.display = 'none';
		} else {
			categoryWarnMessage.innerHTML = 'Please, enter the category name';
			categoryWarnMessage.style.display = 'block';
		} 
		if (itemInput.value) {
			itemWarnMessage.style.display = 'none';
		} else {
			itemWarnMessage.innerHTML = 'Please, enter the item name';
			itemWarnMessage.style.display = 'block';
		}
	}
}

function selectCategory(target) {
	let selectedCategory = document.querySelector('.category_list .checked');
	const categories = document.querySelectorAll('.item_list .category_name');
	if (target.tagName != 'LI' && target.parentNode.tagName != 'LI') {
		
		selectedCategory.classList.remove('checked');
		for (let i = 0; i < categories.length; i++) {
			categories[i].parentNode.classList.remove('checked');
		}
		
		return;	
	} 
	
	const mark = (li) => {
		if (selectedCategory) {
			selectedCategory.classList.remove('checked');
		}
		selectedCategory = li;
		selectedCategory.classList.add('checked');
	}
	
	mark(target.closest('li'));
	
	for (let i = 0; i < categories.length; i++) {
		
		if (categories[i].innerHTML == target.firstChild.innerHTML || categories[i].innerHTML == target.innerHTML ) {
			categories[i].parentNode.classList.add('checked');
		} else {
			categories[i].parentNode.classList.remove('checked');
		}
	}
}

function deleteCategory(target) {	
	if (!target.classList.contains("delete_btn")) return;

	let categoryForDeleting = target.previousSibling.innerHTML;
	listData.delete(categoryForDeleting);	
	drawElements(categoryList, itemList);	
}

function deleteItem(target) {
	if (!target.classList.contains("delete_btn")) return;

	let itemForDeleting = target.previousSibling.innerHTML;

	for (let entry of listData) {
		const category = entry[0];
		const itemsInCategory = entry[1];
		
		for (let i = 0; i < itemsInCategory.length; i++) {
			if (itemsInCategory[i] == itemForDeleting) {
				itemsInCategory.splice(i, 1);
				if (itemsInCategory.length == 0){
					listData.delete(category);	
					drawElements(categoryList, itemList);
					return;
				}
					
				listData.set(category, itemsInCategory);
				drawElements(categoryList, itemList);
				return;
			}
		}		
	}	
}



drawElements(categoryList, itemList);

addItemForm.onsubmit = (e) => {
	e.preventDefault();
	addListItem(categoryInput, itemInput, categoryWarnMessage, itemWarnMessage);
}

categoryList.onclick = (e) => {
	const target = e.target;
	selectCategory(target);
	deleteCategory(target);
}

itemList.onclick = (e) => {
	const target = e.target;
	deleteItem(target);
}

			

