"use client";

import { Header } from "@/app/components";
import Image from "next/image";

export default function LoginScreen() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex-grow flex flex-col md:flex-row">
        <div className="md:relative md:w-3/5 hidden md:block">
          <Image
            src="/hero.webp"
            fill
            alt="Hero Background"
            quality={100}
            className="object-cover object-center absolute inset-0 z-0"
          />
        </div>

        <div className="w-full md:w-2/5 bg-primary-dark flex flex-col justify-center p-8">
          <h2 className="text-5xl font-bold text-green-500">
            Bem-vindo ao
            <br />
            <strong>Log Finance</strong>
          </h2>
          <p className="text-white mt-4 text-lg">
            Uma forma simples e segura de gerenciar suas finanças.
          </p>
          <p className="text-white mt-4 text-lg">
            Bem-vindo ao <strong>Log Finance</strong>, nosso projeto
            recém-nascido que estamos montando com muito carinho. Por enquanto,
            estamos focados em colocar no ar uma ferramenta bacana para ajudar
            você a gerenciar investimentos.
            <br />
            <br />
            De ações e FIIs a criptomoedas e renda fixa. A ideia é começar por
            aí, mas temos um montão de planos para incluir outras coisas legais,
            como orçamento doméstico e controle de gastos, conforme tudo for se
            ajeitando.
          </p>
        </div>
      </div>
    </div>
  );
}
