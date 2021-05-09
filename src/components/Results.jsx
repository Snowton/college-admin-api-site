import React from "react"

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: []
        }
    }

    shouldComponentUpdate(props, state) {
        console.log(this.props.query != props.query, this.state.message != state.message)
        return true
    }

    componentDidUpdate() {
        fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=S4QswG1yOcPueT1ki5kqvg9Kx4YF1VOAudYcz0cQ&school.name=" + this.props.query)
        .then(res => res.json())
        .then(({results}) => {
            this.setState(old => ({message: results}))
            console.log(results);
        })
    }

    render() {
        return <ul>{this.state.message.map((element, index) => {
            const stuff = [
                [element.latest.admissions.admission_rate.overall, "Admissions rate"]
            ]

            return (<li key={index}>{element.school.name}
            <ul>
                {stuff.map((element, index) => element[0] && <li key={index}>{element[1] + ": " + element[0]}</li>)}
            </ul>
            </li>)
        })}</ul>
    }
}

export default Results