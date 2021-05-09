import React from "react"
import Results from "./Results.jsx"
import Input from "./Input.jsx"

const {useState} = React

const App = () => {
    const [query, setQuery] = useState("New York")

    const queryChange = (q) => {
        console.log(q.target.value)
        setQuery(old => q.target.value)
    }

    return (<>
        <h1>Hi</h1>
        <Input inputChange={queryChange}></Input>
        <Results query={query}></Results>
    </>)
}

export default App