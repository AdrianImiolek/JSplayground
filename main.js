const product = document.querySelector("[data-item]");
const productAdd = document.querySelector("[data-item-add]");
const productList = document.querySelector("[data-list]");
const shoppingBtns = document.querySelector("[data-list-btns");
const shoppingBtnRmv = document.querySelectorAll(".shopping-list__btn--remove");
const shoppingBtnCheck = document.querySelectorAll(".shopping-list__btn--checked");
const clearBtn = document.querySelector("[data-clear-btn]");

const addProduct = () => {
	if (product.value === "") {
		alert("Fill in empty space!"); //If space is empty, alert the user
	} else {
		let createLi = document.createElement("li"); //assign a variable that creates an item li
		createLi.classList.add("shopping-list__listed-item"); //provide an li item with class for styling and proper behavior
		createLi.textContent = product.value; //provide textContent for a  item that is assigned via value from input
		productList.appendChild(createLi); //add a created li item with all it's properties to the list

		// --------------------------------------------------

		let createDiv = document.createElement("div"); //create a div element
		createDiv.classList.add("shopping-list__buttons"); //provide a class to that element
		createLi.appendChild(createDiv); //add the element

		//----------------------------------------------------

		let createBtnRmv = document.createElement("button"); //create a button element
		let createBtnCheck = document.createElement("button"); //create a button element
		createBtnRmv.classList.add("shopping-list__btn--remove", "button"); //provide a class to 1st button
		createBtnCheck.classList.add("shopping-list__btn--checked", "button"); //provide a class for 2nd button

		createBtnRmv.innerHTML = "<i class='bx bx-x'></i>"; //provide a class for 1st button
		createBtnCheck.innerHTML = "<i class='bx bx-chevron-down'></i>"; //provide a class for 2nd button

		createDiv.appendChild(createBtnRmv); //append 1st button
		createDiv.appendChild(createBtnCheck); //append 2nd button

		product.value = ""; //set the initial value from input to empty string;
	}
};

function clearList() {
	const allItems = document.querySelectorAll(".shopping-list__listed-item"); // assign a variable with elements containing class .shopping-list__listed-item
	allItems.forEach(item => item.remove());//loop over every element containting this class and remove them
}

productList.addEventListener("click", (event) => {
	const buttonRmv = event.target.closest('.shopping-list__btn--remove');
	if(buttonRmv) {
		buttonRmv.closest('li').remove();
	}
})

productList.addEventListener("click", (event) => {
	const buttonCheck = event.target.closest(".shopping-list__btn--checked");
	if(buttonCheck){
		buttonCheck.closest("li").classList.add("shopping-list__listed-item--bought");
	}
})

product.addEventListener("keydown", (event) => {
	if(event.key === "Enter"){
		addProduct(); //keydown is best used with inputs
	}
})


clearBtn.addEventListener("click",clearList);
productAdd.addEventListener("click",addProduct);
