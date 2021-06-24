import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: "",
    tel: "",
    email: "",
    link: "",
    city: "",
    studio: "",
    recipient: "",
    source: ""
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },

    changeTel: (state, action) => {
      state.tel = action.payload;
    },

    changeEmail: (state, action) => {
      state.email = action.payload;
    },

    changeLink: (state, action) => {
      state.link = action.payload;
    },

    changeCity: (state, action) => {
      state.city = action.payload;
    },

    changeStudio: (state, action) => {
      state.studio = action.payload;
    },

    changeRecipient: (state, action) => {
      state.recipient = action.payload;
    },

    changeSource: (state, action) => {
      state.source = action.payload;
    },
  },
})

export const { changeName, changeTel, changeEmail, changeLink, changeCity, changeStudio, changeRecipient, changeSource } = formSlice.actions

export default formSlice.reducer