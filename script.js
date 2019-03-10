
window.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");
    div.className = "header-container";
    document.body.appendChild(div);

    let header1 = document.createElement("h1"); //created variable for h1 element
    header1.className = "h1";
    header1.id = "header"
    let header1Text = document.createTextNode("This is an h1"); //created variable for the text within h1
    header1.appendChild(header1Text); //putting the text inside of the header
    document.body.appendChild(header1); //added the header to the body of the document

    let header2 = document.createElement("h2")
    header2.className = "h2";
    header2.id = "header"
    let header2Text = document.createTextNode("This is an h2")
    header2.appendChild(header2Text);
    div.appendChild(header2)

    let header3 = document.createElement("h3")
    header3.className = "h3";
    header3.id = "header"
    let header3Text = document.createTextNode("This is an h3")
    header3.appendChild(header3Text);
    div.appendChild(header3)

    let header4 = document.createElement("h4")
    header4.className = "h4";
    header4.id = "header"
    let header4Text = document.createTextNode("This is an h4")
    header4.appendChild(header4Text);
    div.appendChild(header4)

    let header5 = document.createElement("h5")
    header5.className = "h5";
    header5.id = "header"
    let header5Text = document.createTextNode("This is an h5")
    header5.appendChild(header5Text);
    div.appendChild(header5)

    let header6 = document.createElement("h6")
    header6.className = "h6";
    header6.id = "header"
    let header6Text = document.createTextNode("This is an h6")
    header6.appendChild(header6Text);
    div.appendChild(header6)



    let colors = ["red", "orange", "purple", "pink", "black", "gray", "blue", "yellow"]


    header1.addEventListener("dblclick", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        header1.style.color = colors[randomColor]
    })

    header2.addEventListener("dblclick", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        header2.style.color = colors[randomColor]
    })

    header3.addEventListener("dblclick", function () {
        let randomColor = colors[Math.floor((Math.random() * colors.length))]
        header3.style.color = colors[randomColor]
    })

    header4.addEventListener("dblclick", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        return header4.style.color = colors[randomColor]
    });

    header5.addEventListener("dblclick", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        header5.style.color = colors[randomColor]
    });

    header6.addEventListener("dblclick", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        header6.style.color = colors[randomColor]
    })
    //create a double click event on each heading element that changes the color of the heading to one in the array when clicked.

    //write function that inserts a list item, have the first item say "This is list item 1" and any subsequentlist item should have the number incremented by 1

    let button = document.createElement("button")//create button
    let btntext = document.createTextNode("click to add new list item")//gave button text
    button.className = "newitem" //gave button className
    button.appendChild(btntext);//connected text to button
    document.body.appendChild(button);//connected button to document body

    button.style.borderColor = "blue" //styled button so you can see it better

    //created a click event so when the button is clicked the insert item function runs
    var number = 1 //assigned variable called number with value of 1 -function will have this increase by 1 


    function insertItem() {
        let list = document.createElement("li"); //create a list item
        let itemtxt = document.createTextNode("this is list item" + number);//give the item this text
        number++ //increase the number by 1 with each click
        list.appendChild(itemtxt); //connect item text to list
        document.body.appendChild(list); //connect list to document body
    }
    //created a click event so when the button is clicked the insert item function runs
    button.addEventListener("click", insertItem); {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        list.style.color = colors[randomColor]
    }
})
list.addEventListener("dbl-click", function () {
    document.body.removeChild(list);
})
