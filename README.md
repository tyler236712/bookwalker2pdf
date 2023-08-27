Does not work in firefox, but does in edge. Haven't tested in other browsers. use [img2pdf](https://github.com/josch/img2pdf) to convert all pages into one pdf.
Use the main.go file to write the file which you will pass to img2pdf as an argument like:

img2pdf --output book.pdf --from-file names.txt

Other tools I use:

[pypdfium2](https://github.com/pypdfium2-team/pypdfium2) to transfer the pdfs back to images, which I then feed into [mokuro](https://github.com/kha-white/mokuro) to get
html pages with selectable text.