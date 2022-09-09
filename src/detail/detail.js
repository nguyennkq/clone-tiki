import data from '../../db.json' assert {type: 'json'}

const params = new URLSearchParams(window.location.search);
const id = params.get('id')

let book = data.filter(function(book){
    return book.id==id
})

book=book[0];
console.log(book)

const category = book.categories.name;

const contentElement=document.querySelector('#content')
const _content=/*html*/`
   
<div class="lg:px-28 lg:flex">
    <div class="lg:w-1/3 lg:flex-none pt-4 px-4 bg-white">
        <img class="w-full object-cover lg:max-w-[444px]" src="${book.images[0].base_url}" alt="">
        <div class="hidden lg:grid lg:grid-cols-5 lg:gap-2 lg:mt-4">
            ${book.images.map(function(image){
                return `<img src="${image.base_url}" alt="">`
            }).join('')}
        </div>
        <div class="hidden lg:flex lg:mt-6 items-center space-x-2 mb-6">
            <p class="text-[15px]">Chia sẻ:</p>
            <img class="w-7" src="../images/facebook.svg" alt="">
            <img class="w-7" src="../images/zalo.svg" alt="">
            <img src="../images/printest.svg" alt="">
            <img src="../images/twitter.svg" alt="">
            <img src="../images/link.svg" alt="">
        </div>
    </div>
    <div class="lg:grow lg:px-6 pt-6 px-8 bg-white">
        <div>
            <div class="hidden lg:flex space-x-3">
                <p>Tác giả: <p class="text-detail-bd-gd">${book.authors?book.authors[0].name:'Đang cập nhập'}</p></p>
                <p>
                    <p>Đứng thứ 13 trong</p>
                    <a class="text-detail-bd-gd font-normal" href="#">Top 1000</a>
                    <a class="text-detail-bd-gd font-normal" href="#">${book.categories.name}</a>
                    <a class="text-detail-bd-gd font-normal" href="#">bán chạy tháng này</a>
                </p>
            </div>
            <h3 class="lg:text-[23px] text-xl">${book.name}</h3>
            <div class="flex items-center space-x-2">
                <p>⭐️⭐️⭐️⭐️⭐️ ${book.rating_average}</p>
                <span>|</span>
                <p class="text-[15px] text-gray-1">${book.quantity_sold?book.quantity_sold.text:'Đang cập nhật'}</p>
            </div>
        </div>
        <div class="lg:flex space-x-6 mt-4">
            <div>
                <div class="boder outline-none bg-gray-50 px-4 pb-3">
                    <div class="flex items-end space-x-3">
                        <span class="text-[32px] text-red-600 font-semibold">${book.current_seller.price.toLocaleString()}<u>đ</u></span>
                        <span class="line-through leading-8 text-gray-1">${book.list_price.toLocaleString()}<u>đ</u></span>
                        <span class="border-[1px] border-red-500 bg-red-100 text-red-500 font-medium px-1 mb-2 rounded-sm text-[14px]">-${Math.round((book.original_price-book.current_seller.price)/(book.original_price)*100)}%</span>
                    </div>
                    <div class="mt-2 flex bg-detail boder border-detail-bd border-[0.5px] space-x-2 w-fit py-1 px-2 rounded">
                        <img src="../images/top-detail.svg" alt="">
                        <p class="lg:text-[14px] font-medium text-detail-sp text-[12px]">Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</p>
                        <img src="../images/question.svg" alt="">
                    </div>
                </div>
                <div class="flex lg:flex-col justify-between mt-4 boder outline-none bg-gray-50">
                    <p class="text-[12px] mt-4 lg:mt-0 lg:text-[15px] font-medium">15 Mã Giảm Giá</p>
                    <div class="flex space-x-3 mt-2 text-[11px] lg:text-[13px]">
                        <p class="boder border-detail-bd-gd border-[1px] py-1 px-2 rounded text-detail-bd-gd">Giảm 10k</p>
                        <p class="boder border-detail-bd-gd border-[1px] py-1 px-2 rounded text-detail-bd-gd">Giảm 20K</p>
                        <p class="boder border-detail-bd-gd border-[1px] py-1 px-2 rounded text-detail-bd-gd">Giảm 30k</p>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="flex justify-between">
                        <div class="flex items-center space-x-2">
                            <p class="">Giao đến</p>
                            <p class="font-medium md:text-[15px] text-[13px]">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</p>
                            <a class="hidden lg:block font-medium text-base text-blue-600" href="#">Đổi địa chỉ</a>
                        </div>
                            <a class="lg:hidden" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                    </div>
                    <div class="lg:flex lg:space-x-4 mt-3">
                        <div class="hidden lg:block border boder-[0.5px] border-gray-2 rounded-xl px-2 py-1">
                            <div class="flex items-center space-x-2">
                                <img src="../images/tikinow-content.svg" alt="">
                                <p class="text-green-500 text-[15px] font-normal">Trước 18:00 hôm nay</p>
                            </div>
                            <p class="mt-1">19.000đ</p>
                            <div class="flex items-center space-x-2 boder outline-none border-[0.5px] bg-detail rounded p-1 mt-1">
                                <img src="../images/top-detail.svg" alt="">
                                <p class="">Freeship 100% chỉ với 34 ASA</p>
                                <img src="../images/question.svg" alt="">
                            </div>
                        </div>
                        <div class="border boder-[0.5px] border-gray-2 rounded-xl px-2 py-1">
                            <div class="flex items-center space-x-2">
                                <img src="../images/tikifast.svg" alt="">
                                <p class="text-green-600 md:text-[15px] font-normal text-[13px]">Ngày mai, trước 23:00</p>
                            </div>
                            <p class="mt-1">10.000đ (Freeship 30K đh 149K)</p>
                            <div class="flex items-center space-x-2 boder outline-none border-[0.5px] bg-detail rounded p-1 mt-1 w-fit">
                                <img src="../images/top-detail.svg" alt="">
                                <p class="bg-detail">Freeship 100% chỉ với 18 ASA</p>
                                <img src="../images/question.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block">
                <div class="flex space-x-2 ">
                    <img src="../images/tiki-detail.svg" alt="">
                    <div>
                        <p class="text-[15px]">Tiki Trading</p>
                        <img src="../images/official.svg" alt="">
                    </div>
                </div>
                <div class="flex space-x-16 px-6 mt-3">
                    <div class="text-[15px] text-center">
                        <p class="font-semibold">4.6 / 5⭐️</p>
                        <p class="text-[11px] text-gray-1">4.7tr+</p>
                    </div>
                    <div class="text-[15px] text-center">
                        <p class="font-semibold">408k+</p>
                        <p class="text-[11px] text-gray-1">Theo dõi</p>
                    </div>
                </div>
                <div class="flex mt-3 space-x-3">
                    <div class="flex boder border-detail-bd-gd border-[1px] space-x-2 p-2 rounded">
                        <img src="../images/shop-detail.svg" alt="">
                        <p class="text-detail-bd-gd">Xem Shop</p>
                    </div>
                    <div class="flex boder border-detail-bd-gd border-[1px] space-x-2 p-2 rounded">
                        <img src="../images/follow.svg" alt="">
                        <p class="text-detail-bd-gd">Theo Dõi</p>
                    </div>
                </div>
                <div class="flex space-x-6 mt-4 border-t-[0.5px] border-gray-2 pt-2">
                    <div class="text-center">
                        <img class="mx-auto block" src="../images/tick.svg" alt="">
                        <p class="mt-3">Hoàn tiền</p>
                        <p class="font-medium">111%</p>
                        <p>nếu hàng giả</p>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto block"  src="../images/like.svg" alt="">
                        <p class="mt-3">Mở hộp</pcla>
                        <p>kiểm tra</p>
                        <p>nhận hàng</p>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto block"  src="../images/replay.svg" alt="">
                        <p class="mt-3">Đổi trả trong</p>
                        <p class="font-medium">30 ngày</p>
                        <p>nếu sp lỗi</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-6 border boder-[0.5px] border-gray-2 rounded p-2">
                    <div>
                        <p class="font-medium">8 nhà bán khác</p>
                        <p class="text-gray-1">Giá từ 75.210 ₫</p>
                    </div>
                    <p class="boder border-detail-bd-gd border-[1px] text-detail-bd-gd rounded py-1 px-2">So Sánh</p>
                </div>
            </div>
        </div>
        <div class="hidden md:block border-t-[0.5px] border-gray-2 mt-3">
            <h3 class="text-[15px] pt-4 font-medium">Số Lượng</h3>
            <div class="flex mt-[10px]">
                <button class="border boder-[0.5px] border-gray-2 px-2" id="down">
                    <img src="../images/subtract.svg" alt="">
                </button>
                <input class="max-w-[40px] max-h-[32px] text-center outline-none border boder-[0.5px] border-gray-2 p-1 " type="text" value="1">
                <button class="border boder-[0.5px] border-gray-2 p-1" id="up">
                    <img src="../images/add.svg" alt="">
                </button>
                </div>
        </div>
        <div class="bg-main md:bg-white left-2 right-2 fixed bottom-0 z-50 md:static">
            <button type="button" class="mb-2 md:mb-0 w-full mt-2 md:mt-4 md:w-[300px] h-[48px] bg-red-600 text-white rounded lg:hover:opacity-70">
                Chọn Mua
            </button>
        </div>
    </div>
    </div>
</div>
    <div class="lg:px-28 mt-6">
    <div class="relative bg-white">
    <h3 class="text-xl font-medium px-4 mb-4 pt-2 bg-white">Sản Phẩm Tương Tự</h3>
            <div class="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4" id="horizontal-scroll">
                <button class=" z-10 bg-gray-2 border-[1px] border-main rounded-[50%] absolute left-0 top-1/2 hover:opacity-50" id="btn-left">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button class=" z-10 bg-gray-2 absolute border-[1px] border-main rounded-[50%] right-0 top-1/2 hover:opacity-50 " id="btn-right">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>


                ${data.filter(function(book) {
                    return book.categories.name == category
                }).map(function(book) {
                    return /*html*/`
                        <a href="../detail/index.html?id=${book.id}" class="flex-shrink-0 max-w-[200px] lg:hover:shadow-shadow-content border-[1px] border-gray-2 lg:border-none">
                            <img class="lg:max-h-[200px] mx-auto block" src="${book.images[0].base_url}">
                            <p class="text-left px-2 mt-1">${book.name}</p>
                            <div class="flex space-x-2 mt-2 px-2 items-center">
                                <p class="flex"></p>
                                <p>${book.rating_average}</p>
                                <span>|</span>
                                <p class="text-gray-1">${book.quantity_sold?book.quantity_sold.text:'Đang cập nhật'}</p>
                            </div>
                            <div class="flex space-x-3 items-center mt-1 px-2">
                                <p class="text-red-500 font-bold mb-1">${book.current_seller.price} <u>đ</u></p>
                                <span class="border-[1px] border-red-500 bg-red-100 text-red-500 font-medium px-1 mb-2 rounded-sm">-${Math.round((book.original_price-book.current_seller.price)/(book.original_price)*100)}%</span>
                            </div>
                        </a>
                    `
                }).join('')}
            </div>
        </div>

        <div class="block lg:hidden mt-6 px-8 bg-white pb-2">
                <div class="flex space-x-2 ">
                    <img src="../images/tiki-detail.svg" alt="">
                    <div>
                        <p class="text-[15px]">Tiki Trading</p>
                        <img src="../images/official.svg" alt="">
                    </div>
                </div>
                <div class="flex px-6 mt-3 justify-around">
                    <div class="text-[15px] text-center">
                        <p class="font-semibold">4.6 / 5⭐️</p>
                        <p class="text-[11px] text-gray-1">4.7tr+</p>
                    </div>
                    <div class="text-[15px] text-center">
                        <p class="font-semibold">408k+</p>
                        <p class="text-[11px] text-gray-1">Theo dõi</p>
                    </div>
                </div>
                <div class="flex mt-3 justify-center space-x-3">
                    <div class="flex boder border-detail-bd-gd border-[1px] space-x-2 p-2 rounded w-full justify-center">
                        <img src="../images/shop-detail.svg" alt="">
                        <p class="text-detail-bd-gd font-medium">Xem Shop</p>
                    </div>
                    <div class="flex boder border-detail-bd-gd border-[1px] space-x-2 p-2 rounded w-full justify-center">
                        <img src="../images/follow.svg" alt="">
                        <p class="text-detail-bd-gd font-medium">Theo Dõi</p>
                    </div>
                </div>
                <div class="flex justify-around mt-4 border-t-[0.5px] border-gray-2 pt-2">
                    <div class="text-center">
                        <img class="mx-auto block" src="../images/tick.svg" alt="">
                        <p class="mt-3">Hoàn tiền</p>
                        <p class="font-medium">111%</p>
                        <p>nếu hàng giả</p>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto block"  src="../images/like.svg" alt="">
                        <p class="mt-3">Mở hộp</pcla>
                        <p>kiểm tra</p>
                        <p>nhận hàng</p>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto block"  src="../images/replay.svg" alt="">
                        <p class="mt-3">Đổi trả trong</p>
                        <p class="font-medium">30 ngày</p>
                        <p>nếu sp lỗi</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-6 border boder-[0.5px] border-gray-2 rounded p-2">
                    <div>
                        <p class="font-medium">8 nhà bán khác</p>
                        <p class="text-gray-1">Giá từ 75.210 ₫</p>
                    </div>
                    <p class="boder border-detail-bd-gd border-[1px] text-detail-bd-gd rounded py-1 px-2">So Sánh</p>
                </div>
        </div>

        <div class="mt-8 border-[1px] p-4 max-w-[920px] bg-white">
            <h3 class="mt-3 text-xl font-medium capitalize">Thông tin chi tiết</h3>
            <table class="mt-2 w-full">
                <tbody>
                    ${book.specifications[0].attributes && book.specifications[0].attributes.map(function(table_info){
                        return /*html*/`
                        <tr>
                            <td class="px-4 py-[10px] sm:w-[220px] w-fit font-medium bg-gray-2">${table_info.name}</td>
                            <td class="px-4 py-[10px] bg-slate-50">${table_info.value}</td>
                        </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        </div>
        <div class="mt-4 px-8 lg:px-4 pb-4 bg-white">
            <h3 class="text-xl font-medium capitalize pt-2">Mô Tả Sản Phẩm</h3>
            <div class="text-[14px]">
                <p id="textShort" class="">${book.short_description}</p>
                <span id="dots"></span>
                <span id="more" class="hidden">${book.description}</span> 
                <button id="myBtn" class="block mx-auto mt-2 text-blue-500 font-medium border-[1px] border-blue-500 w-[229px] h-[39px] text-center rounded hover:text-white hover:bg-blue-500">
                    Xem Thêm Nội Dung
                </button>
            </div>
        </div>
        <div class="block md:hidden mt-4 mb-20">
            <div class="px-8">
                <h2 class="mb-4 text-lg">SẢN PHẨM BẠN ĐÃ XEM</h2>
                <img src="../images/daxem.png" alt="">
                <p class="mt-2">Gió thổi mùa trăng năm ấy</p>
                <div class="flex space-x-2">
                    <p>4.5</p>
                    <p class="text-gray-1">1000+</p>
                </div>
                <p class="font-bold">179000</p>
            </div>
        </div>
        
    </div>


`
contentElement.innerHTML=_content

let btn=document.querySelector('#myBtn')

btn.onclick=function(){
    let dots = document.querySelector("#dots");
    let moreText = document.querySelector("#more");
    let btnText = document.querySelector("#myBtn");
    let textShort=document.querySelector("#textShort")

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem Thêm Nội Dung";
      moreText.style.display = "none";
      textShort.style.display="block";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Thu gọn Nội Dung";
      moreText.style.display = "inline";
      textShort.style.display="none";
    }
}
    
const productContainers = [...document.querySelectorAll('#horizontal-scroll')];
const nxtBtn = [...document.querySelectorAll('#btn-left')];
const preBtn = [...document.querySelectorAll('#btn-right')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})

function xuatsao(rating_average){
    let sosao=""
    for(let i=0;i<=rating_average;i++){
        sosao+= `<img src="../images/saoden.svg">`
    }
    return sosao
}









