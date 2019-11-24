import React, { useState } from "react"
import Main from './Main'


function App() {
    const [awards, setAwards] = useState([])
    const [type, setType] = useState('')
    return (<div className="container">
        <header><h1>The Achievements of Charity. H. Blakely</h1></header>
        <Main awards={awards} awardType={type} />
        <aside>

            <h3>Special Olympics</h3>
            <div style={{
                'display': "flex",
                'justifyContent': "space-between",
                'flexWrap': 'wrap'
            }}>
                <button style={{ 'backgroundColor': '#FFD700' }} onClick={() => {
                    setAwards([
                        {
                            'name': "Bowling Doubles",
                            'year': 2012,
                            'division': 9
                        }
                    ])
                    setType('Metal')
                }}>Gold</button>

                <button style={{ 'backgroundColor': '#C0C0C0' }} onClick={() => {
                    setAwards([
                        {
                            'name': "Women's 15m Unassisted Swim",
                            'year': 2013,
                            'devision': '235B'
                        }, {
                            'name': "Women's 10m Assisted Swim",
                            'year': 2013,
                            'devision': '21B'
                        }, {
                            'name': "Women's 10m Assisted Swim",
                            'year': 2012,
                            'devision': '262A'
                        }
                    ])
                    setType('Metal')
                }}>Silver</button>
                <button style={{
                    'backgroundColor': '#cd7f32'
                }} onClick={() => {
                    setAwards([
                        {
                            'name': "Women's 25y Flaotation Race",
                            'year': 2012,
                            'devision': '218B'
                        }
                    ])
                    setType('Metal')
                }}>Bronze</button>
                <button style={{
                    'backgroundColor': '#301934',
                    'color': 'white'
                }} onClick={() => {
                    setAwards([
                    {
                        'name': "Women's 15y Unassisted Swim",
                        'color': "rgba(0,0,255,0.4)",
                        'year': 2011
                    }, {
                        'name': "Women's 25yd Flaotation Race",
                        'year': 2013,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Women's 15m Unassisted Swim",
                        'year': 2013,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Mixed 10yd Freestyle Assisted Swim",
                        'year': 2012,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Mixed 15yd Walk",
                        'year': 2011,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Mixed 15yd Walk",
                        'year': 2011,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Women's 25m Freestyle Swim",
                        'year': 2012,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Mixed 25yd Freestyle Swim",
                        'year': 2012,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Mixed 25yd Assisted Swim",
                        'year': 2012,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Mixed 25yd Flaotation Race",
                        'year': 2013,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Women's 10m Assisted Swim",
                        'year': 2013,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Standing Long Jump",
                        'year': 2011,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Softball Throw",
                        'year': 2011,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "Women's 10m Assisted Swim",
                        'year': 2012,
                        'color': "rgba(0,0,255,0.4)"
                    }, {
                        'name': "100m Run",
                        'year': 2011,
                        'color': "rgba(255,0,0,0.4)"
                    }
                ])
                setType('Ribbons')
                }}>Ribbons</button>
            </div>
            <h3>Girls On The Run/Girls On Track</h3>
            <button style={{
                'backgroundColor': "#FF69B4"
            }} onClick={() => {
                setAwards([
                {
                    'name': "Girls On The Run 5K",
                    'year': 2011
                }, {
                    'name': "Girls On The Run 5K",
                    'year': 2012
                }, {
                    'name': "Girls On Track 5K",
                    'year': 2013
                }])
                setType('Metal')
            }}>5K</button>
            <h3>Student Awards/Acheivements</h3><div style={{
                'display': "flex",
                'justifyContent': "space-between",
                'flexWrap': 'wrap'
            }}>
            <button style={{
                'backgroundColor': "#00FF00"
            }} onClick={() => {
                setAwards([
                {
                    'name': "Certificate of Completion Course 1",
                    'year': "2016"
                }, {
                    'name': "Certificate of Completion Course 2",
                    'year': "2016"
                }, {
                    'name': "Certificate of Completion Course 3",
                    'year': "2016"
                }
            ])
            setType('Code.org')
            }}>Code.org</button>
            <button style={{
                'backgroundColor': "#000000",
                'color': '#FFFFFF'
            }} onClick={() => {
                setAwards([{
                    'name': "\"Friendly Face\" Mrs.Burns",
                    'year': 2009
                },{
                'name': "\"Most Improved Overall\" Mrs. Houghton",
                'year': 2009
            },{
                'name': "\"Great Reading & Writing\" Mrs. Hannid, Mrs. Corbett, Ms. Bridges",
                'year': 2010
            },{
                'name': "\"Outstanding Sense of Humoor Award\" Mrs. Ogle, Mrs. Simons",
                'year': 2010
            }])
                setType('bublegum')
            }}>School</button></div>
            <h3>Young Women Personal Progress</h3>
            <button style={{
                'backgroundColor': "#FFCCF6"
            }} onClick={() => {
                setAwards([
                {
                    'name': "Faith",
                    'year': 2018,
                    'color': "rgba(255, 255, 255, 0.6)"
                }, {
                    'name': "Divine Nature",
                    'year': '',
                    'color': "rgba(83,133,152,0.6)"
                }, {
                    'name': "Individuad Worth",
                    'year': '',
                    'color': "rgba(255,0,0,0.6)"
                }, {
                    'name': "Knowledge",
                    'year': 2018,
                    'color': "rgba(107,179,0,0.6)"
                }, {
                    'name': "Choice and Accountability",
                    'year': 2018,
                    'color': "rgba(219,117,32,0.6)"
                },{
                    'name': "Integrity",
                    'year': '',
                    'color': "rgba(128,0,255,0.6)"
                }, {
                    'name': "Good Works",
                    'year': 2018,
                    'color': "rgba(218,154,26,0.6)"
                }, {
                    'name': "Virtue",
                    'year': 2018,
                    'color': "rgba(255,215,0,0.6)"
                }
            ])
            setType('YWPP Ribbons')
            }}>Ribbons</button>
        </aside>
        <footer><a href="https://www.youtube.com/channel/UCv465Iaq24Ol11sb7X_ZnfQ/"><i className="fa fa-youtube fa-2x"></i></a></footer></div >
    )
}

export default App;

