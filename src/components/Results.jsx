import React from "react"

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: "",
            message: ""
        }
    }

    componentDidMount() {
        fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=S4QswG1yOcPueT1ki5kqvg9Kx4YF1VOAudYcz0cQ&_fields=school.name")
        .then(res => res.json())
        .then(({results}) => {
            const message = results.reduce((acc, element) => acc + element["school.name"]+ ", " , "")
            console.log(results, message)
            this.setState(old => ({message: message}))
        }) 
    }

    render() {
        return <>{this.state.message}</>
    }
}

export default Results