import React from 'react'
import "./blog_template.css"

import { useSpring, animated} from 'react-spring'
import {Helmet} from 'react-helmet';


export const Table = ({data}) => {
    return(
        <table key={data.Location} className="container_tb">
            <tr className="tb_row">
                <th className="column-name">Name</th>                
                <td className="column-value">{data.Name}</td>
            </tr >
            <tr className="tb_row">
                <th className="column-name">Color</th>
                <td className="column-value">{data.Color}</td>
            </tr>
            <tr className="tb-row">
                <th className="column-name">Element</th>
                <td className="column-value">{data.Element}</td>
            </tr>
            <tr className="tb-row">
                <th className="column-name">Function</th>
                <td className="column-value">{data.Function}</td>
            </tr>
            <tr className="tb-row">
                <th className="column-name">Sense</th>
                <td className="column-value">{data.Sense}</td>
            </tr>
            <tr className="tb-row">
                <th className="column-name">Animal</th>
                <td className="column-value">{data.Animal}</td>
            </tr>
            <tr className="tb-row">
                <th className="column-name">Mantra</th>
                <td className="column-value">{data.Mantra}</td>
            </tr>
            <tr className="tb-row">
                <th className="column-name">Lotus</th>
                <td className="column-value">{data.Lotus}</td>
            </tr>
            <tr className="tb-row">
                <th className="column-name">Stones</th>
                <td className="column-value">{data.Stones}</td>
            </tr>
        </table>
        )
   
}

export const ChakraContainer = ({children}) => {
    //get the SVG of the chakras 
    //add animation 
    const fade = useSpring({opacity: 1, from : {opacity: 0}})
    return (
        <animated.div style={fade} className="chakraLogo">
            {children}
        </animated.div>
    )

}

export const ContentHeader = ({data}) => {
    //href for the different 
    const fade = useSpring({opacity: 1, from : {opacity: 0}})
    return (
    <animated.h1 style={fade}>
        {data.Name}
    </animated.h1>
    )
}
export const SEOhelate = ({data}) => {
    return (
        <Helmet>
                <meta charSet="utf-8" />
                <title>{data.Name}</title>
                <link id="favicon" rel="icon" href={data.Flavicon} type="image/x-icon"/>
        </Helmet>
    )
}
export const Activation = ({data}) => {
    return(
        <div>
            <h2>Activation</h2>
            <p className="contentstyle">{data.Activation}</p>
        </div>
    )
}
export const Introduction = ({data}) => {
    return (
        <div>
            <h2>Introduction</h2>
            <p className="contentstyle">{data.Introduction}</p>
        </div>
    )
}
export const Description = ({data}) => {
    return (
        <div>
            <h2>Description</h2>
            <p className="contentstyle">{data.Description}</p>
        </div>
    )
}
export const Effect = ({data}) => {
    return(
        <div>
            <h2>Effect</h2>
            <p className="contentstyle">{data.Effect}</p>
        </div>
    )
}

export const BalancedState = ({data}) => {
    return(
        <div>
            <h2>Balanced State</h2>
            <p className="contentstyle">{data.Balanced}</p>
        </div>
    )
}


