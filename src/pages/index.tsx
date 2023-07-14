import Tabela from "@/components/Tabela";
import Layout from "../components/Layout";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import useClientes from "@/hooks/useClientes";

export default function Home() {

  const { selecionarCliente, 
    novoCLiente, 
    obterTodos, 
    excluirCliente, 
    salvarCliente,
    cliente,
    tabelaVisivel,
    exibirTabela,
    clientes } = useClientes();

  return (
    <div className={`
      flex justify-center items-center
      h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastrino">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onCick={novoCLiente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
            />
          </>

        ) : (
          <Formulario cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
