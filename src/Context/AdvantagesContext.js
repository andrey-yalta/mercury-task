import React from 'react'
import {AdvantagesApi} from "../api/api";
import images from "../assets/img/image1.jpeg";
import images2 from "../assets/img/image2.jpeg";
import images3 from "../assets/img/image3.jpeg";
import images4 from "../assets/img/image4.jpeg";

export const SET_PHOTOS = 'SET_PHOTOS'
export const SET_POSTS = 'SET_POSTS'

const AdvantagesContext = React.createContext()
export const useAdvantagesContext = ()=>{
    return React.useContext(AdvantagesContext)
}
const reducer =(state,action)=>{

    switch (action.type) {

        case SET_POSTS:
            return {...state,posts:action.posts}
        case SET_PHOTOS:

            return {...state,photos:action.photos}
        default: return state
    }
}
export const AdvantagesProvider =({children}) =>{

    const initialState ={
        posts:[],
        photos:[],
        slider:[],
        slidersImages:[{img:images, text:"hello world 1", title:"text slider 1"},{img:images2, text:"hello world 2", title:"text slider 2"},{img:images3, text:"hello world 3", title:"text slider 3"},{img:images4, text:"hello world 4", title:"text slider 4"}]
    }
    const [state, dispatch] =React.useReducer(reducer,initialState)
    const setPhotos =(photos)=> {

        dispatch({type:SET_PHOTOS, photos:photos})
    }
    const getPhotos= async()=>{
        let data = await AdvantagesApi.getPhotos()
        setPhotos(data.data)
    }
    const getPosts= async()=>{
        let data = await AdvantagesApi.getPosts()
        setPosts(data.data)
    }
    const setPosts =(posts)=> dispatch({type:SET_POSTS, posts:posts})

    return(
        <AdvantagesContext.Provider
            value={{
                posts:state.posts,
                photos:state.photos,
                slider:state.slider,
                slidersImages: state.slidersImages,
                setPhotos,setPosts,getPhotos,getPosts
            }}>
            {children}
        </AdvantagesContext.Provider>
    )
}