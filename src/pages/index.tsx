import Tabela from "@/components/Tabela";
import Layout from "../components/Layout";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 44, '2'),
    new Cliente('Pedro', 23, '3'),
    new Cliente('Carlos', 54, '4'),
  ]

    const clienteSelecionado = (cliente: Cliente) => {
      console.log(cliente.nome);
    }

    const clienteExcluido = (cliente: Cliente) => {
      console.log(`exclui ${cliente.nome}`);
    }

    const salvarCliente = (cliente:Cliente) => {
      console.log(cliente);
    }

    const [visivel, setVisivel] = useState<'tabela' | 'form' >('tabela');

  return (
    <div className={`
      flex justify-center items-center
      h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastrino">
        {visivel  === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onCick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            />
          </>

        ) : (
          <Formulario cliente={clientes[0]}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
