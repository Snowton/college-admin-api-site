import React from "react"
import Results from "./Results.jsx"
import Input from "./Input.jsx"
import "./results.css"
// import { StaticImage } from "gatsby-plugin-image"
import logo from '../images/education.svg';

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
        <center>
        {/* <StaticImage src="../images/education.png" alt="education"/> */}
        <div className="image">
        <img src={logo}/>
        </div>
        <div className="title">
        <h1>College Search</h1>
        </div>
        <h4 className="text">Search below to find out more about colleges to aid your college admissions process!</h4>
        <div className="search">
        <Input inputChange={queryChange}></Input>
        </div>
        <Results message={message}></Results>
        </center>
    </>)
}

export default App