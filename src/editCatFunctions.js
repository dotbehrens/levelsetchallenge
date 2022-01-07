




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

        editThumbnailURL(newThumbnailURL, cats[catIndex]);
        editCatName(newName, cats[catIndex]);
        editBirthDate(newBirthDate, cats[catIndex]);
        editOwner(newOwnerName, cats[catIndex]);
    }
    localStorage.setItem("cats", JSON.stringify(cats));

    return;
}

export function editThumbnailURL(newThumbnailURL, cat) {

    if (newThumbnailURL !== null || newThumbnailURL !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newThumbnailURL !== "") {
            cat.thumbnail_url = newThumbnailURL
        }
    }

}

export function editCatName(newName, cat) {

    if (newName !== null || newName !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newName !== "") {

            cat.name = newName

        }
    }

}
export function editBirthDate(newBirthDate, cat) {

    if (newBirthDate !== null || newBirthDate !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newBirthDate !== "") {
            cat.birthdate = newBirthDate
        }
    }

}
export function editOwner(newOwner, cat) {

    if (newOwner !== null || newOwner !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newOwner !== "") {
            cat.owner_name = newOwner
        }
    }

}

export function deleteCat(catIndex) {
    let cats = getCatList()
    let newCatArray = cats.filter((cat, i) => {
        return i !== catIndex

    })

    localStorage.setItem("cats", JSON.stringify(newCatArray));
}

export function formatDate(date) {


    let birthdate = new Date(date)

    return `${birthdate.getMonth() + 1}/ ${birthdate.getUTCDate()}/ ${birthdate.getFullYear()}`
}

