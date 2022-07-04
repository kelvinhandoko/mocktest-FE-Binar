const createNew = document.querySelector(".createNew")
const editProduct = document.querySelector(".editProduct")
const editIcon = document.querySelectorAll("#edit")
const deleteIcon = document.querySelectorAll("#delete")
const deleteProduct = document.querySelector(".deleteProduct")

const createButton = () => {
  createNew.classList.add("active")
}

const createBackButton = () => {
  createNew.classList.remove("active")
}

const editButton = () => {
  editProduct.classList.add("active")
}

const editBackButton = () => {
  editProduct.classList.remove("active")
}

editIcon.forEach((icon) =>
  icon.addEventListener("click", () => {
    editButton()
  })
)
const deleteButton = () => {
  deleteProduct.classList.add("active")
}

const deleteBackButton = () => {
  deleteProduct.classList.remove("active")
}

deleteIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    deleteButton()
  })
})
