interface WishList {
    name: string;
    list: string[];
    isNaughty: boolean;
}

const santasWishlists: WishList[] = [
    {
    list: ['Tesla', 'PS5'],
    name: 'Nathaniel',
    isNaughty: true
    },

    {
    list: ['Presentkort'],
    name: 'Ella',
    isNaughty: false
    },

    {
    list: ['Ponny'],
    name: 'Alva',
    isNaughty: false
    }
]

window.addEventListener('load', main);

function main() {
    renderSantasWishlists();
}

function renderSantasWishlists() {
    const mainElement = document.querySelector('main')
    if (!mainElement) return;

    mainElement.innerHTML = '';

    for (const wishlist of santasWishlists) {
      const div = createSingleWishlistElement(wishlist);
        mainElement.append(div)
    }
}

function createSingleWishlistElement(wishlist: WishList) {
    const div = document.createElement('div')
    div.className = "wish-list-card"
    
    const h3 = document.createElement('h3')
    h3.innerHTML = wishlist.name;
    div.append(h3)
    
    const ul = document.createElement('ul')
    for (const wish of wishlist.list) {
        const li = document.createElement('li')
        li.innerText = wish;
        ul.append(li)
    }
    div.append(ul)
    return div;

}