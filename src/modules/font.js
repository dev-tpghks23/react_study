import { createAction, handleActions } from 'redux-actions';

// 1번 실습
// 타입 생성
const BIGGER = "font/BIGGER";
const INPUT_BIGGER ="font/INPUT_BIGGER";

// 액션 생성
export const bigger = createAction(BIGGER);
export const inputBigger = createAction(INPUT_BIGGER);

const initialState = {
  fontSize : "1rem",
  inputFontSize : "1rem",
}

// 리듀서 생성
const font = handleActions({
  [BIGGER] : (state, action) => ({...state, fontSize : "3rem"}),
  [INPUT_BIGGER] : (state, action) => ({...state, inputFontSize : action.payload}),
}, initialState)

export default font;
