import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services:[
            {
            icon:<FaCocktail />,
            title:"Free CockTails",
            info:'Enjoy your party with our free unlimited  Cocktails'
        },
        {
            icon:<FaHiking />,
            title:"Endless Hiking",
            info:'Enjoy your party with our free unlimited  Cocktails'
        },
        {
            icon:<FaShuttleVan />,
            title:"Free Shuttle",
            info:'Enjoy your party with our free unlimited  Cocktails'
        },
        {
            icon:<FaBeer />,
            title:"Strong Beer",
            info:'Enjoy your party with our free unlimited  Cocktails'
        }
    ]
    }


    render() {
        return (
            
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
