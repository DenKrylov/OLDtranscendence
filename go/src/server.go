package main

import (
	"fmt"
	"net/http"
	"html/template"
)

type User struct {
	Name string
	Age uint16
	Money int16
	Avg_grades, Happines float64
	Hobbies []string

}

func (u User) getAllInfo() string {
	return fmt.Sprintf("User name is: %s. He is %d and he has money " +
		"equal: %d", u.Name, u.Age, u.Money)
}

func (u User) setNewName(newName string){
	u.Name = newName
}

func home_page(w http.ResponseWriter, r *http.Request) {
	bob := User{"Bob", 25, -50, 4.2, 0.8, []string{"Foodbol", "Dance"}}
	tmp, _ := template.ParseFiles("html/index.html")
	tmp.Execute(w, bob)
}

func contacts_page(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Contacts page!")
}

func handleRequest() {
	http.HandleFunc("/", home_page)
	http.HandleFunc("/contacts/", contacts_page)
	http.ListenAndServe(":8000", nil)
}

func main() {
	handleRequest()
}