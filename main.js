const product = document.querySelector("[data-item]");
const productAdd = document.querySelector("[data-item-add]");
const productList = document.querySelector("[data-list]");
const shoppingBtns = document.querySelector('[data-list-btns');


const addProduct = () => {
	if (product.value === "") {
		alert("Fill in empty space!");
	} else {
		let createLi = document.createElement("li"); //assign a variable that creates an item li
		createLi.classList.add("shopping-list__listed-item"); //provide an li item with class for styling and proper behavior
		createLi.textContent = product.value; //provide textContent for an li item that is assigned via value from input
		productList.appendChild(createLi); //add a created li item with all it's properties to the list

		let createDiv = document.createElement("div")
		createDiv.classList.add("shopping-list__buttons");
		createLi.appendChild(createDiv);

		let createBtnRmv = document.createElement("button");
		let createBtnCheck = document.createElement("button");
		createBtnRmv.classList.add("shopping-list__btn--remove");
		createBtnCheck.classList.add("shopping-list__btn--checked");

		createBtnRmv.innerHTML="<i class='bx bx-x'></i>";
		createBtnCheck.innerHTML="<i class='bx bx-chevron-down'></i>";

		createDiv.appendChild(createBtnRmv);
		createDiv.appendChild(createBtnCheck);

		product.value = "";
	}
};

function removeProduct() {}

productAdd.addEventListener("click", addProduct);



let createProduct = document.createElement("li"); //create an element

		// let createBtn = document.createElement("button"); //create a button

		// createProduct.classList.add("shopping-list__listed-item"); //provide a class for created element

		// createProduct.textContent = product.value; //provide textContent based on initial value

		// productList.appendChild(createProduct); //add everything that was made inside the list

		// createBtn.classList.add("shopping-list__btn--remove");
		// createBtn.classList.add("shopping-list__btn--checked");

		// product.value = ""; //clear item 