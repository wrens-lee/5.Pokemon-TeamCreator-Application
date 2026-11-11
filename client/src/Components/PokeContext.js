import { createContext, useContext } from 'react';

export const ItemContext = createContext();

export const useItemContext = () => useContext(ItemContext);