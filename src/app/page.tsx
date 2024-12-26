"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiLeafFill } from "react-icons/pi";
import { GiPaintBrush } from "react-icons/gi";
import { PiHourglassHighBold } from "react-icons/pi";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Para o efeito parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Para as animações baseadas na visibilidade
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.2, // 20% do elemento visível
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          // Opcional: remover a classe quando o elemento sair da viewport
          entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);

    // Observar todos os elementos com classes de animação
    const animatedElements = document.querySelectorAll(
      ".animate-fade-in, .animate-slide-in-left, .animate-slide-in-right"
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    // Event listener para o parallax
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-warm-gradient">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-soft-glow">
        <div
          className="absolute inset-0 overflow-hidden opacity-60"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=2070&auto=format&fit=crop"
            alt="Vela aromática em ambiente aconchegante"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-8 py-16 bg-white/30 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-neutral-800">
            Aromas que transformam momentos
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-700 animate-fade-in">
            Velas artesanais que trazem conforto e elegância para seu ambiente
          </p>
          <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 animate-fade-in shadow-lg">
            Explorar Coleção
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <h2 className="text-2xl md:text-3xl text-center mb-12 text-neutral-800 font-light animate-fade-in">
          Nossas Fragrâncias em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card-glow rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="aspect-square relative animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl text-neutral-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {product.description}
                </p>
                <span className="text-neutral-900 font-medium">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section com novo estilo */}
      <section className="py-20 px-4 bg-rose-50/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center group animate-fade-in card-glow p-8 rounded-2xl"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/50 rounded-full transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium mb-3 text-neutral-800">
                {benefit.title}
              </h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Processo Artesanal com novo estilo */}
      <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16 text-neutral-800 font-light animate-fade-in">
            Processo Artesanal
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl text-neutral-800 font-light">
                Tradição e Cuidado em Cada Detalhe
              </h3>
              <p className="text-neutral-600 leading-relaxed animate-fade-in">
                Nossas velas são cuidadosamente elaboradas à mão, em pequenos
                lotes, garantindo atenção especial a cada peça. Utilizamos cera
                de soja 100% natural, uma escolha sustentável que proporciona
                uma queima mais limpa e duradoura.
              </p>
              <p className="text-neutral-600 leading-relaxed animate-fade-in">
                Cada fragrância é desenvolvida através de uma cuidadosa
                combinação de óleos essenciais puros, criando aromas únicos que
                transformam ambientes e despertam sensações.
              </p>
            </div>
            <div
              className="relative h-[400px] animate-slide-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=2071&auto=format&fit=crop"
                alt="Processo artesanal de fabricação"
                fill
                className="object-cover rounded-lg animate-fade-in"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 md:order-1 animate-slide-in-left">
              <Image
                src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=2071&auto=format&fit=crop"
                alt="Seleção de ingredientes naturais"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2 animate-slide-in-right">
              <h3 className="text-2xl text-neutral-800 font-light">
                Do Início ao Fim, Com Amor
              </h3>
              <p className="text-neutral-600 leading-relaxed animate-fade-in">
                O processo começa com a seleção minuciosa dos ingredientes. A
                cera é derretida em temperatura controlada, permitindo a
                perfeita incorporação das fragrâncias. Cada pavio é centralizado
                manualmente, garantindo uma queima uniforme.
              </p>
              <p className="text-neutral-600 leading-relaxed animate-fade-in">
                O tempo de cura é respeitado rigorosamente, permitindo que a
                fragrância se desenvolva por completo. Cada vela passa por um
                controle de qualidade individual antes de chegar até você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Velas Especiais Section */}
      <section className="py-24 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16 text-neutral-800 font-light animate-fade-in">
            Edição Especial
          </h2>

          {/* Vela Timbólia */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div
              className="relative h-[600px] animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop"
                alt="Vela Timbólia"
                fill
                className="object-cover rounded-lg shadow-lg animate-fade-in"
              />
              <div
                className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="text-neutral-800 font-medium">
                  Edição Especial
                </span>
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-light text-neutral-800 animate-slide-in-left">
                  Vela Timbólia
                </h2>
                <p className="text-2xl text-neutral-600 font-light animate-slide-in-right">
                  Uma experiência sensorial única
                </p>
              </div>

              <div
                className="prose prose-neutral animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Criada artesanalmente com uma combinação exclusiva de óleos
                  essenciais, a Vela Timbólia traz uma fragrância sofisticada
                  que evoca memórias de um jardim ao entardecer. Notas de
                  jasmim, baunilha e âmbar se entrelaçam em perfeita harmonia.
                </p>
                <ul className="space-y-3 text-neutral-600 mt-6">
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    Duração de até 45 horas de queima
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    Cera 100% natural de soja
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    Pavio de algodão trançado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    Fragrância exclusiva e duradoura
                  </li>
                </ul>
              </div>

              <div className="flex items-end gap-4">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">
                    Preço especial
                  </p>
                  <p className="text-3xl font-light text-neutral-800">
                    R$ 78,40
                  </p>
                </div>
                <button className="ml-auto bg-neutral-800 text-white px-8 py-4 rounded-full hover:bg-neutral-700 transition-all transform hover:scale-105 flex items-center gap-2">
                  <span>Adicionar ao Carrinho</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-500">
                  Cada vela é única, feita à mão com amor e cuidado. Pequenas
                  variações na cor e textura são características que tornam sua
                  Timbólia ainda mais especial.
                </p>
              </div>
            </div>
          </div>

          {/* Vela Timborange */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-neutral-800">
                  Vela Timborange
                </h2>
                <p className="text-2xl text-neutral-600 font-light">
                  Energia e vitalidade em cada momento
                </p>
              </div>

              <div className="prose prose-neutral">
                <p className="text-lg text-neutral-600 leading-relaxed">
                  A Timborange traz a energia vibrante da laranja combinada com
                  notas sutis de canela e baunilha. Uma fragrância que desperta
                  os sentidos e traz vitalidade ao ambiente, perfeita para
                  momentos de criatividade e socialização.
                </p>
                <ul className="space-y-3 text-neutral-600 mt-6">
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    Aroma cítrico revigorante
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    40 horas de queima uniforme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    Cera vegetal premium
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800">•</span>
                    Fragrância duradoura
                  </li>
                </ul>
              </div>

              <div className="flex items-end gap-4">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">
                    Preço especial
                  </p>
                  <p className="text-3xl font-light text-neutral-800">
                    R$ 78,40
                  </p>
                </div>
                <button className="ml-auto bg-orange-700 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center gap-2">
                  <span>Adicionar ao Carrinho</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-500">
                  Edição limitada com fragrância exclusiva. A cor vibrante e o
                  aroma único da Timborange trazem energia positiva para
                  qualquer ambiente.
                </p>
              </div>
            </div>

            <div
              className="relative h-[600px] order-1 md:order-2 animate-slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="https://images.tcdn.com.br/img/img_prod/1323509/vela_aromatica_ansiedade_105_1_7c614c32715a7ad6a480cca5108adcbf.jpg"
                alt="Vela Timborange"
                fill
                className="object-cover rounded-lg shadow-lg animate-fade-in"
              />
              <div
                className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="text-orange-700 font-medium">
                  Edição Limitada
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter com novo estilo */}
      <section className="py-20 px-4 bg-rose-50/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-4 text-rose-900 font-light animate-fade-in">
            Receba Nosso Carinho
          </h2>
          <p className="text-rose-700 mb-8 animate-fade-in">
            Inscreva-se para receber novidades e mensagens especiais
          </p>
          <form className="flex gap-2 max-w-md mx-auto animate-fade-in">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-6 py-3 rounded-full border border-rose-200 focus:outline-none focus:border-rose-400 bg-white/80"
            />
            <button className="bg-rose-700 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-all hover:scale-105">
              Receber
            </button>
          </form>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-4 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16 text-neutral-800 font-light animate-fade-in">
            Nossa Galeria
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Image
                  src={image}
                  alt={`Vela aromática ${index + 1}`}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm md:text-base font-light">
                      Vela Aromática {index + 1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredProducts = [
  {
    id: 1,
    name: "Lavanda & Vanilla",
    description:
      "Relaxante e acolhedor, perfeito para momentos de tranquilidade",
    price: "R$ 89,90",
    image:
      "https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Madeiras & Âmbar",
    description: "Sofisticado e envolvente, ideal para ambientes elegantes",
    price: "R$ 99,90",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Flores Brancas",
    description: "Suave e delicado, traz frescor para qualquer ambiente",
    price: "R$ 79,90",
    image:
      "https://images.tcdn.com.br/img/img_prod/1323509/vela_aromatica_ansiedade_105_1_7c614c32715a7ad6a480cca5108adcbf.jpg",
  },
];

const benefits = [
  {
    title: "100% Natural",
    description:
      "Ingredientes naturais e sustentáveis em todas as nossas velas",
    icon: (
      <PiLeafFill className="w-10 h-10 text-neutral-600 transition-all duration-300 group-hover:text-green-400 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
    ),
  },
  {
    title: "Artesanal",
    description: "Produção artesanal com atenção aos mínimos detalhes",
    icon: (
      <GiPaintBrush className="w-10 h-10 text-neutral-600 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
    ),
  },
  {
    title: "Longa Duração",
    description: "Até 40 horas de fragrância duradoura",
    icon: (
      <PiHourglassHighBold className="w-10 h-10 text-neutral-600 transition-all duration-300 group-hover:text-amber-400 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
    ),
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=1974&auto=format&fit=crop",
  "https://images.tcdn.com.br/img/img_prod/1323509/vela_aromatica_ansiedade_105_1_7c614c32715a7ad6a480cca5108adcbf.jpg",
  "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608263153703-caa6b0fd7bc7?q=80&w=1974&auto=format&fit=crop",
];
