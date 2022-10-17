export function reformPages(pages) {

    return pages.map(item => {
        item.content.data = addImgNumbers(item.content.data)


        return item
    })


}


function addImgNumbers(data) {
    let i = 0
    return data.map((element) => {
        if (element.type === 'img')
            element.imgNumber = ++i

        return element
    })
}