import React from "react"

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: "New York",
            message: []
        }
    }

    componentDidMount() {
        fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=S4QswG1yOcPueT1ki5kqvg9Kx4YF1VOAudYcz0cQ&school.name=" + this.state.query)
        .then(res => res.json())
        .then(({results}) => {
            this.setState(old => ({message: results}))
            console.log(results);
        }) 
    }

    render() {

        return <ul>{this.state.message.map((element, index) => {
            const ovad = element.latest.admissions.admission_rate.overall

            return (<li key={index}>{element.school.name}
            <ul>
                {ovad && <li>{"Admissions rate: " + ovad}</li>}
            </ul>
            </li>)
        })}</ul>
    }
}

export default Results