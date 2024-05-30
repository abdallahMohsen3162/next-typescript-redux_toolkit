// store/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Person{
  name: string;
  value:number;
}

interface CounterState {
  arr: Person[];
}

const initialState: CounterState = {
  arr: [],
};

export const counterSlice = createSlice({
  name: 'personsArray',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Person>) => {
      state.arr.push({
        name: action.payload.name,
        value: action.payload.value}) 
    },

    remove:(state, action: PayloadAction<Person>) => {
      for(let i = 0; i < state.arr.length; i++){
        if(state.arr[i].name == action.payload.name && state.arr[i].value == action.payload.value){
          state.arr.splice(i, 1);
        }
      }
    }
  },
});

export const { add , remove} = counterSlice.actions;
export default counterSlice.reducer;
