import Tabela from "@/components/Tabela";
import Layout from "../components/Layout";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 44, '2'),
    new Cliente('Pedro', 23, '3'),
    new Cliente('Carlos', 54, '4'),
  ]

  return (
    <div className={`
      flex justify-center items-center
      h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastrino">
          <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
