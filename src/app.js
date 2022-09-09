import data from '../db.json' assert {type: 'json'}
// console.log(data)

const bookListElement = document.querySelector('#book-list')
let _content = ""
data.forEach(function (book) {
    _content = _content + /*html*/`
    <a href="./detail/index.html?id=${book.id}" class="p-4 lg:hover:shadow-shadow-content border-[1px] border-gray-2 lg:border-none cursor-pointer">
        <img class="lg:max-h-[200px] max-h-[160px] mx-auto block" src="${book.images[0].base_url}" alt="">
        <p class="mt-3">
            <img src="./images/tikinow-content.svg" alt="">
        </p>
        <p class="mt-2">${book.name}</p>
        <div class="flex space-x-2 mt-2">
            <p>${book.rating_average}</p>
            <span>|</span>
            <p class="text-gray-1">${book.quantity_sold?book.quantity_sold.text:'Đang cập nhật'}</p>
        </div>
        <div class="flex space-x-3 items-center">
            <p class="text-red-500 font-bold mb-1">${book.current_seller.price} <u>đ</u></p>
            <span class="border-[1px] border-red-500 bg-red-100 text-red-500 font-medium px-1 mb-2 rounded-sm">-${Math.round((book.original_price-book.current_seller.price)/(book.original_price)*100)}%</span>
        </div>
        <img src="./images/rehonhoantien.svg" alt="">
    </a>
    `
})

bookListElement.innerHTML = _content

