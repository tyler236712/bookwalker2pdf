const viewer = document.querySelector("#viewer")
const link = document.createElement("a")
const evt = new Event("wheel")
evt.deltaY = // Set this to the size of a page
const numPages = // set this to the amount of pages
for (var i = 0 ; i<numPages;i++) {
    const page = document.querySelector(`#wideScreen${i} > canvas`)
    const url = page.toDataURL("imageg/jpeg") // usually downloads them as pngs anyways
    link.href = url
    link.download = `page${i+1}`
    link.click()
    viewer.dispatchEvent(evt)
    await new Promise(r => setTimeout(r, 2000)) // So it has time to load the next pages
}