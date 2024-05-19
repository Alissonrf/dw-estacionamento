import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();
export  const  GlobalProvider = (props) => {

    const [reservations, setReservations] = useState(initialState);

    const initialState = [
        {
            placa: 'ABC-1234',
            dono: 'Alisson Flores',
            numeroApartamento: '101',
            bloco: 'A',
            modelo: 'Ford-Ka',
            cor: 'Branco',
            estacionamento: '1',
            ocupado: true
        },
        {
            placa: 'ABC-4321',
            dono: 'Flores Alisson',
            numeroApartamento: '102',
            bloco: 'B',
            modelo: 'Ferrari Italia',
            cor: 'Vermelho',
            estacionamento: '2',
            ocupado: true
        },
        ...Array.from({length:17}, (_,i) => ({
            estacionamento: i+4,
            ocupado: false
        }))
    ]

    return(
        <GlobalContext.Provider value={{reservations, setReservations}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext);
} 
