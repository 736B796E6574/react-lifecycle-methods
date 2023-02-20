import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
        console.log('Constructor called')
    }

    changeLoaded() {
        setTimeout(() => { this.setState({ isLoggedIn: !this.state.isLoggedIn }) }, 2000);
        console.log('Change state called')
    }

    componentDidMount() {
        this.changeLoaded()
        console.log('Component did mount')
      }
    
    render() {
        console.log('render method called')
        return (
            <div className={css.Content}>
                
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>

                    {/* Part 1: Creating the map function */}

                        {/* {
                    savedPosts.map((post)=>{
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt="random"/>
                                <p>{post.description}</p>
                                </div>
                        })
                    } */}


                    {/* Part 2: Creating a child component */}
                   
                </div>
                { !this.state.isLoggedIn ? 
                    <Loader />:
                    <PostItem savedPosts={savedPosts} /> 
                   }
            </div>
        )
    }
}

export default Content