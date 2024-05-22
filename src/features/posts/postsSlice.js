import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello!' },
    {id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString,
                        title,
                        content,
                        user: userId
                    }
                }
            }
        },

        
        postUpdated(state, action){
            const {id, newTitle, newContent} = action.payload;
            const existingPost = state.find(post => post.id === id)
            if (existingPost){
                state.title = newTitle,
                state.content = newContent
            }
        }
    }
})

export const {postAdded, postUpdated} = postsSlice.actions;

export default postsSlice.reducer