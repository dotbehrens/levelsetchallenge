

const saved = localStorage.getItem("cats");
let cats = JSON.parse(saved);


export function getViewCount(catID) {
    if (cats) {

        cats.map((cat, i) => {
            if (cat.id === catID) {
                return cat.views_count;
            }

        })
    }
}
export function getCatList() {
    const saved = localStorage.getItem("cats");
    let cats = JSON.parse(saved);
    return cats;
}

export function increaseViewCount(catID) {
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

export function editCatDetails(catID, newBirthDate, newThumbnailURL, newName, newOwnerName) {
    if (cats) {

        let catIndex;
        cats.map((cat, i) => {
            if (cat.id === catID) {
                catIndex = i
            }
        })

        editThumbnailURL(catIndex, catID, newThumbnailURL);
        editCatName(catIndex, catID, newName);
        editBirthDate(catIndex, catID, newBirthDate);
        editOwner(catIndex, catID, newOwnerName);
    }
    return;
}

export function editThumbnailURL(catIndex, catID, newThumbnailURL) {
    if (newThumbnailURL !== null || newThumbnailURL !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newThumbnailURL !== "") {
            cats[catIndex].thumbnail_url = newThumbnailURL
        }
    }
    localStorage.setItem("cats", JSON.stringify(cats));
}

export function editCatName(catIndex, catID, newName) {

    if (newName !== null || newName !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newName !== "") {
            cats[catIndex].name = newName
            localStorage.setItem("cats", JSON.stringify(cats));
        }
    }

}
export function editBirthDate(catIndex, catID, newBirthDate) {
    if (newBirthDate !== null || newBirthDate !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newBirthDate !== "") {
            cats[catIndex].birthdate = newBirthDate
        }
    }
    localStorage.setItem("cats", JSON.stringify(cats));
}
export function editOwner(catIndex, catID, newOwner) {

    if (newOwner !== null || newOwner !== undefined) {
        // check for empty string
        // check for string with no characters other than space
        if (newOwner !== "") {
            cats[catIndex].owner_name = newOwner
        }
    }
    localStorage.setItem("cats", JSON.stringify(cats));
}

export function deleteCat(catID) {
    let newCatArray = []

    cats.filter((cat) => {
        if (cat.id !== catID) {
            newCatArray.push(cat)
        }
    })
    cats = newCatArray;
    localStorage.setItem("cats", JSON.stringify(cats));
}


