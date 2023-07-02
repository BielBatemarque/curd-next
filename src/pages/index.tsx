import Tabela from "@/components/Tabela";
import Layout from "../components/Layout";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";

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

  return (
    <div className={`
      flex justify-center items-center
      h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastrino">
          <div className="flex justify-end">
            <Botao className="mb-4">Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
          />
      </Layout>
    </div>
  )
}
