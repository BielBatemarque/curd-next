import Tabela from "@/components/Tabela";
import Layout from "../components/Layout";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";

export default function Home() {
  const repo:ClienteRepositorio = new ColecaoCliente();

  const [visivel, setVisivel] = useState<'tabela' | 'form' >('tabela');
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  
  const obterTodos = () => {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }
  
  useEffect(obterTodos, []);

    const clienteSelecionado = (cliente: Cliente) => {
      setCliente(cliente);
      setVisivel('form');
    }

    const clienteExcluido = async (cliente: Cliente) => {
      await repo.excluir(cliente);
      obterTodos();
    }

     const salvarCliente = async  (cliente:Cliente) => {
     await repo.salvar(cliente);
     obterTodos();
    }

    const novoCLiente = () => {
      setCliente(Cliente.vazio());
      setVisivel('form');
    }

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
              <Botao className="mb-4" onCick={novoCLiente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            />
          </>

        ) : (
          <Formulario cliente={cliente}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
