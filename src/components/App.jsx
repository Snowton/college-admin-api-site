import React from "react"
import Results from "./Results.jsx"
import Input from "./Input.jsx"

const {useState} = React

const App = () => {
    const [message, setMessage] = useState([])

    const queryChange = (q) => {
        console.log(q.target.value)

        fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=rYi5aVIgo1ipZMa10ptOzIxlTGZxN2FIcOeE0wjo&school.name=" + q.target.value)
        .then(res => res.json())
        .then(({results}) => {
            console.log(results);
            if(results) setMessage(old => results)
        })

        // setMessage(old => q.target.value)
    }

    return (<>
        <h1>Hi</h1>
        <Input inputChange={queryChange}></Input>
        <Results message={message}></Results>
    </>)
}

export default App