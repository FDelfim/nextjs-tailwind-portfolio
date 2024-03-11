import Image from "next/image";
import Home from "./components/home";
import Card from "./components/card";

export default function Index() {
  return (
    <div className='m-10 gap-10 flex'>
      <Card title='QR Leitos' subtitle='Aplicação para monitoramento de leitos hospitalares' app='?' repo=':' description='lorem ipsum' img='https://via.placeholder.com/150'/>
      <Card title='Rs-sp' subtitle='Escala de resiliência psicológica no espote' description='lorem ipsum' img='https://via.placeholder.com/150'/>
    </div>
  );
}

