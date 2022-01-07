




export function getCatList() {
    const saved = localStorage.getItem("cats");
    let cats = JSON.parse(saved);
    return cats;
}
export function getViewCount(catID) {
    let cats = getCatList()
    if (cats) {

        cats.map((cat, i) => {
            if (cat.id === catID) {
                return cat.views_count;
            }

        })
    }
}

export function increaseViewCount(catID) {
    let cats = getCatList()
    let catIndex;
    cats.map((cat, i) => {
        if (cat.id === catID) {
            catIndex = i;
        }
    })
    cats[catIndex].views_count++;
    localStorage.setItem("cats", JSON.stringify(cats));
    return cats;
}

export function editCatDetails(catIndex, newBirthDate, newThumbnailURL, newName, newOwnerName) {
    let cats = getCatList()

    if (cats) {

        editThumbnailURL(catIndex, newThumbnailURL, cats);
        editCatName(catIndex, newName, cats);
        editBirthDate(catIndex, newBirthDate, cats);
        editOwner(catIndex, newOwnerName, cats);
    }
    return;
}

export function editThumbnailURL(catIndex, newThumbnailURL, cats) {

    if (newThumbnailURL !== null || newThumbnailURL !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newThumbnailURL !== "") {
            cats[catIndex].thumbnail_url = newThumbnailURL
        }
    }
    localStorage.setItem("cats", JSON.stringify(cats));
}

export function editCatName(catIndex, newName, cats) {

    if (newName !== null || newName !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newName !== "") {
            cats[catIndex].name = newName
            localStorage.setItem("cats", JSON.stringify(cats));
        }
    }

}
export function editBirthDate(catIndex, newBirthDate, cats) {

    if (newBirthDate !== null || newBirthDate !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newBirthDate !== "") {
            cats[catIndex].birthdate = newBirthDate
        }
    }
    localStorage.setItem("cats", JSON.stringify(cats));
}
export function editOwner(catIndex, newOwner, cats) {

    if (newOwner !== null || newOwner !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newOwner !== "") {
            cats[catIndex].owner_name = newOwner
        }
    }
    localStorage.setItem("cats", JSON.stringify(cats));
}

export function deleteCat(catIndex) {
    let cats = getCatList()
    let newCatArray = []

    cats.filter((cat, i) => {
        if (i !== catIndex) {
            newCatArray.push(cat)
        }
    })
    cats = newCatArray;
    localStorage.setItem("cats", JSON.stringify(cats));
}

export function formatDate(date) {


    let birthdate = new Date(date)

    return `${birthdate.getMonth() + 1}/ ${birthdate.getUTCDate()}/ ${birthdate.getFullYear()}`
}

