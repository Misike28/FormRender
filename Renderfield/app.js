import { renderField } from "./field.js"
import { renderForm } from "./field.js"
 
const app = document.getElementById("app")
let globalState = {}
 
/*let text1 = renderField({
    id: "text1",
    type: "text",
    label: "Szöveg input",
    labelOnTop : true,
    state: globalState,
})
app.appendChild(text1)
 
app.appendChild(document.createElement("br"))
app.appendChild(document.createElement("br"))
let text2 = renderField({
    id: "text2",
    type: "text",
    label: "Mégegy szöveg input",
    labelOnTop : false,
    state: globalState,
})
app.appendChild(text2)
 
app.appendChild(document.createElement("br"))
app.appendChild(document.createElement("br"))
let number = renderField({
    id: "number1",
    type: "number",
    label: "Szám input",
    labelOnTop : true,
    state: globalState,
})
app.appendChild(number)
 
 
app.appendChild(document.createElement("br"))
app.appendChild(document.createElement("br"))
let email1 = renderField({
    id: "email1",
    type: "email",
    label: "Email input",
    labelOnTop : true,
    state: globalState,
})
app.appendChild(email1)*/

let form = renderForm({
    showState: true,
    labelOnTop: true,
    fields: [
    {
    id: "text1",
    type: "text",
    label: "Első text input"
    },
    {
    id: "text2",
    type: "text",
    label: "Második text input"
    },
    {
    id: "number1",
    type: "number",
    label: "Első Szám input"
    },
    {
    id: "email1",
    type: "email",
    label: "Email input"
    }]
    })

    app.appendChild(form)
