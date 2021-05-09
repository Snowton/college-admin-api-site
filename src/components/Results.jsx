import React from "react"
import "./results.css"

class Results extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     message: []
        // }
    }

    // shouldComponentUpdate(props, state) {
    //     // console.log(this.props.query != props.query, this.state.message != state.message)
    //     return true
    // }

    // componentDidUpdate() {
    //     fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=rYi5aVIgo1ipZMa10ptOzIxlTGZxN2FIcOeE0wjo&school.name=" + this.props.message)
    //     .then(res => res.json())
    //     .then(({results}) => {
    //         this.setState(old => ({message: results}))
    //         console.log(results);
    //     })
    // }

    render() {
        return <div>{this.props.message.map((element, index) => {
            const stuff = [
                [element.latest.admissions.admission_rate.overall, "Admissions rate"],
                [element.latest.admissions.sat_scores.average.overall, "Average SAT score"],
                [element.latest.admissions.act_scores.midpoint.cumulative, "Midpoint ACT score"],
                [element.latest.cost.tuition.in_state, "In-State Tuition"],
                [element.latest.cost.tuition.out_of_state, "Out-of-State Tuition"],
            ]

            const programs = element.latest.academics.program_percentage;
            const sortable = []
            for(let prog in programs) sortable.push([prog, programs[prog]])
            console.log(sortable.sort((e1, e2) => e2[1] - e1[1]))

            const rendered = []
            for(let i = 0; i < 5; i++) rendered.push(sortable[i])

            rendered.map(element => {
                element[0] = element[0].replaceAll("_", " ")
                element[0] = element[0].charAt(0).toUpperCase() + element[0].slice(1)
                return element
            })

            return (
            <center>
            <div className="card border-info mb-3" style={{maxWidth: "70%"}}>
            <div className="card-header"></div>
            <div className="card-body">
               <h5 className="card-title" key={index}>{element.school.name} </h5>
                {stuff.map((element, index) => element[0] && <div className="card-text" key={index}>{element[1] + ": " + element[0]}</div>)}
                
                {rendered[0][1] && <><hr /><p><h6>Top 5 programs:</h6>
                    <div>
                        {rendered.map((el, ind) => <li key={ind}>{el[0]}: {(el[1] * 100).toFixed(2)}%</li>)}
                    </div>
                </p></>}
            </div>
            </div>
            </center>)
        })}</div>
    }

}

export default Results
