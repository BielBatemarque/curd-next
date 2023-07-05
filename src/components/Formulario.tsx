import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente:Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) =>  void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return(
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura className="mb-5"/>
            ) : false }
            <Entrada texto="nome" valor={nome} valorMudou={setNome} className="mb-4"/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>

            <div className="flex mt-3 justify-end">
               <Botao cor="blue" className="mr-2" onCick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    { id ? 'Alterar' : 'Salvar'}
               </Botao>
               <Botao cor="gray" children={'Cancelar'} onCick={props.cancelado}/>
            </div>
        </div>
    );
}