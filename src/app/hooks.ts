import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'

import type { RootState,AppDispatch } from './store'

export const useAppSElector:TypedUseSelectorHook<RootState>=useSelector
export const useAppDispatch =() =>useDispatch<AppDispatch>()