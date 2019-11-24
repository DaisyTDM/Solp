import React from "react"


function Main(props) {
    console.log(props)
    if(props.awards.length === 0){
        return ( 
            <main>
                Click on the right
            </main>
            )
    } else {
        const Awards = props.awards.map((award,i) => {
            if(award.color !== undefined) {
                return <tr key={i} style={{'backgroundColor': award.color}}><td>{award.name}</td><td>{award.year}</td></tr>
            } else {return <tr key={i}><td>{award.name}</td><td>{award.year}</td></tr>}
        })

        return ( 
            <main>
               <table>
                   <thead><tr><th>{props.awardType}</th><th>Year</th></tr></thead>
                   <tbody>{Awards}</tbody>
               </table>
            </main>
            )
    }
    
}

export default Main;

