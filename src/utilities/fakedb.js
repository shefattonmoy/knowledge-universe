// use local storage to manage cart data
const addToDb = id => {
    let bookmark = getBookmark();
    // add quantity
    const quantity = bookmark[id];
    if (!quantity) {
        bookmark[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        bookmark[id] = newQuantity;
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
}

const removeFromDb = id => {
    const bookmark = getBookmark();
    if (id in bookmark) {
        delete bookmark[id];
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
    }
}

const getBookmark = () => {
    let bookmark = {};

    //get the shopping cart from local storage
    const storedBookmark = localStorage.getItem('bookmark');
    if (storedBookmark) {
        bookmark = JSON.parse(storedBookmark);
    }
    return bookmark;
}

const deleteBookmark = () => {
    localStorage.removeItem('bookmark');
}

export {
    addToDb,
    removeFromDb,
    getBookmark,
    deleteBookmark
}
