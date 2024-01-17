export function isEmpty(theList) {
    const charInList = theList.filter((element) => element != "")
    return charInList.length > 0 ? false : true
}