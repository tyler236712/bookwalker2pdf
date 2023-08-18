Does not work in firefox, but does in edge. Haven't tested in other browsers. use [img2pdf](https://github.com/josch/img2pdf) to convert all pages into one pdf.
Use the main.go file to write the file which you will pass to img2pdf as an argument like:

img2pdf --output book.pdf --from-file names.txt