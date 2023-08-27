package main

import (
	"fmt"
	"os"
)

func main() {
	file, _ := os.Create("names.txt")

	for i := 0; i < 200; i++ { // the stop condition should equal the number of pages
		page := []byte(fmt.Sprintf("page%d.png", i+1)) // creates a byte slice of file names
		file.Write(append(page, 0))                  // appends the null byte to the end and writes it to the file
	}

}
