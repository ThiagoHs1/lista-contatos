import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactProps from '../../models/contact'

type ContactState = {
  itens: ContactProps[]
}

const initialState: ContactState = {
  itens: [
    {
      id: '1',
      name: 'Thiago henrique',
      phone: '01254345678',
      email: 'thiago@gmail.com',
      favorite: true
    },

    {
      id: '2',
      name: 'joao souza',
      phone: '568956486954',
      email: 'joaosouza@gmail.com',
      favorite: false
    },

    {
      id: '3',
      name: 'Pedro Almeida',
      phone: '559998754215',
      email: 'pedroalmeida@gmail.com',
      favorite: false
    }
  ]
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contatc) => contatc.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<ContactProps>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    addFavorite: (state, action: PayloadAction<ContactProps>) => {
      const editedFavorite = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (editedFavorite >= 0) {
        state.itens[editedFavorite] = action.payload
      }
    },
    register: (state, action: PayloadAction<ContactProps>) => {
      const existingContact = state.itens.find(
        (c) =>
          c.phone.toLocaleLowerCase() ==
          action.payload.phone.toLocaleLowerCase()
      )
      if (existingContact) {
        alert('Já existe um contato com esse numero')
      } else {
        const newContatc = action.payload
        state.itens.push(newContatc)
      }
    },
    contactFilter: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contatc) => contatc.name !== action.payload
      )
      state.itens = state.itens.filter(
        (contatc) => contatc.phone !== action.payload
      )
    }
  }
})

export const { remover, edit, addFavorite, register } = contactSlice.actions
export default contactSlice.reducer
