import { atom } from "recoil";

const ordersListAtom = atom({
    key: 'ordersListAtom',
    default: [],
});

export default ordersListAtom