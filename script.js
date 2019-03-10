
window.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");
    div.className = "header-container";
    document.body.appendChild(div);

    let header = document.createElement("h1"); //created variable for h1 element
    header.className = "h1";
    header.id = "header"
    let headerText = document.createTextNode("This is an h1"); //created variable for the text within h1
    header.appendChild(headerText); //putting the text inside of the header
    document.body.appendChild(header); //added the header to the body of the document

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

"h1".addEventListener("dblclick", getRandomColor)


    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener("dblclick", getRandomColor);

    }

    function getRandomColor(event) {
       var randomColor = colors[Math.floor(Math.random() * colors.length)];
       return h1.style.color = colors[randomColor]
    }


    //create a double click event on each heading element that changes the color of the heading to one in the array when clicked.












}); 
