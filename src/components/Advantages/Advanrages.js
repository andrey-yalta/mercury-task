import React from 'react'
import {AdvantagesItem} from "./AdvantagesItem";
import {useAdvantagesContext} from "../../Context/AdvantagesContext";

export const Advantages = ()=>{
    const {posts,photos}= useAdvantagesContext()
    return(
        <div className="advantages">
            <h2>Header</h2>
            <div className="advantages__items">
                {posts && posts.map(u=> <AdvantagesItem key={u.id} header={u.title} text={u.body} img={photos[u.id-1] && photos[u.id-1].thumbnailUrl && photos[u.id-1].thumbnailUrl}/>)}
            </div>
        </div>
    )
}