import { DDECREMENT, DINCREMENET } from "./actionsType";

export const increment = (value) => {
    return {
        type: DINCREMENET,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DDECREMENT,
        payload: value,
    };
};
