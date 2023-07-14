import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaOuForm from "./useTabelaOuForm";


export default function useClientes(){
    const repo:ClienteRepositorio = new ColecaoCliente();

    const { tabelaVisivel, formularioVisivel,exibirFormulario, exibirTabela} = useTabelaOuForm();
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    
    const obterTodos = () => {
      repo.obterTodos().then((clientes) => {
        setClientes(clientes);
        exibirTabela();
      });
    }
    
    useEffect(obterTodos, []);
  
      const selecionarCliente = (cliente: Cliente) => {
        setCliente(cliente);
        exibirFormulario();
      }
  
      const excluirCliente = async (cliente: Cliente) => {
        await repo.excluir(cliente);
        obterTodos();
      }
  
       const salvarCliente = async  (cliente:Cliente) => {
       await repo.salvar(cliente);
       obterTodos();
      }
  
      const novoCLiente = () => {
        setCliente(Cliente.vazio());
        exibirFormulario();
      }

      return{
        tabelaVisivel,
        cliente,
        clientes,
        salvarCliente,
        novoCLiente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        exibirTabela,
      };
}