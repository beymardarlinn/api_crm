import React, {useEffect, useState} from 'react'
import Formulario from '../components/Formulario';
import { useParams } from 'react-router-dom';

const EditarCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resulado = await respuesta.json()
                
                setCliente(resulado)

            } catch (error) {
                console.log(error)
            }

            setCargando(!cargando)
        }

        obtenerClienteAPI()

    }, [])

    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este formulario para editar un cliente</p>
        
            {cliente?.nombre ? (
                <Formulario
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : <p>Cliente ID no valido</p>}
            
        </div>
    );
}
 
export default EditarCliente;