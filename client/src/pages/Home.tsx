import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/Carousel";
import { MessageCircle } from "lucide-react";

/**
 * Design Philosophy: Elegância Atemporal com Sofisticação Curatorial
 * - Verde Musgo (#2A5C3E) como cor principal
 * - Dourado Envelhecido (#C9A96E) para destaques
 * - Off-white (#F5F0E8) e Creme (#FAF8F4) para fundos
 * - Tipografia: Playfair Display (títulos) + Lato (corpo)
 * - Foco em conversão para WhatsApp
 * - Mobile-first design com carrosseis para gerar curiosidade
 */

const WHATSAPP_LINK = "https://chat.whatsapp.com/BaqcwmG17nUE10xE9M28TF";

// Imagens dos carrosseis
const carouselImages = {
  featured: [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/product-1-chair-NWKX8RTkMB7tQkdFaGKFJo.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-1-vase-FA82ai5x3kpXDPJG2tBrf6.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-2-boxes-ZEf7VGBsgtR85byerW4MgG.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-3-centerpiece-b4oyGbGxKSnCV6XY5VVF6g.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-4-bottle-BgKzgypGd3WUEnbb2TdJEc.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-5-sculpture-jc3uMqqFsuGcWzHKn4m8Bg.webp",
  ],
  collection: [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-6-armchair-aVsFgveSAJP5tNLiNopqWb.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-7-bowl-fMhrseQosoHMMFQXb7swQi.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-8-set-mWHUSW6jb892Bz6ThJNsPV.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-9-painting-nDzuyxyabNuQWH2P8xAXAh.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-10-lamp-3Cj53RB6LhoqyUKj5hQtTn.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/product-2-mirror-8weqSmyr2BSA8iYvSje94u.webp",
  ],
  decoracao: [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-11-clock-5Bjp24fPW8tGBLox7zQoc3.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-12-jewelry-NK8UsmWxUrSMUXbNooYmCh.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-13-desk-YDPxtNCmUt7KPaHHfJbkPL.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-14-vase-blue-nJB4vAXZNCjkLNDCxY4t7h.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-15-mirror-ornate-WSYdqGaE2wCMxyLTgeVKdc.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/product-3-crystal-9ZN7rHz7TnwXxC4gKQc9dE.webp",
  ],
  arte: [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-16-candelabra-Zju3fr89ign5h3jHiytwhp.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-17-teapot-5HUycHfb8WhAbK6RX7mHBD.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-18-sculpture-bronze-CBnkJKfNGoMbFGu2FKYDLb.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-19-cabinet-3LsXLjWsxmuiqeMbmqa3bm.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-20-vase-porcelain-JsxTKLHgAQwtXtvc39qjzJ.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-1-vase-FA82ai5x3kpXDPJG2tBrf6.webp",
  ],
  moveis: [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-13-desk-YDPxtNCmUt7KPaHHfJbkPL.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-6-armchair-aVsFgveSAJP5tNLiNopqWb.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-19-cabinet-3LsXLjWsxmuiqeMbmqa3bm.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/product-1-chair-NWKX8RTkMB7tQkdFaGKFJo.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-7-bowl-fMhrseQosoHMMFQXb7swQi.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/carousel-10-lamp-3Cj53RB6LhoqyUKj5hQtTn.webp",
  ],
};

export default function Home() {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F5F0E8] border-b border-[#E8E0D5] shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/logo-mf-Yb3FmUjLpEc6grpv9buU7L.webp"
              alt="Mariela Forestti"
              className="h-8 md:h-10 w-auto"
            />
            <h1 className="text-lg md:text-xl font-bold text-[#2A5C3E]" style={{ fontFamily: "Playfair Display" }}>
              MARIELA FORESTTI
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#por-que" className="text-[#2A5C3E] hover:text-[#C9A96E] transition-colors text-sm">
              Por Que Entrar
            </a>
            <a href="#pecas" className="text-[#2A5C3E] hover:text-[#C9A96E] transition-colors text-sm">
              Últimas Peças
            </a>
            <a href="#prova-social" className="text-[#2A5C3E] hover:text-[#C9A96E] transition-colors text-sm">
              Comunidade
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663163462109/GLwuoJMw5dnSEuDT2kreJb/hero-banner-fmpg2NSARtoMivFq4qELUJ.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h2 className="text-3xl md:text-7xl font-bold text-[#F5F0E8] mb-4 md:mb-6" style={{ fontFamily: "Playfair Display" }}>
            HISTÓRIA, BELEZA E AUTENTICIDADE
          </h2>
          <p className="text-lg md:text-2xl text-[#F5F0E8] mb-6 md:mb-8" style={{ fontFamily: "Lato" }}>
            Em cada detalhe
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:scale-105 active:scale-97"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              ENTRAR NO GRUPO VIP
            </Button>
          </a>
        </div>
      </section>

      {/* Por Que Entrar Section */}
      <section id="por-que" className="py-12 md:py-20 px-4 bg-[#FAF8F4]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2A5C3E] mb-8 md:mb-16" style={{ fontFamily: "Playfair Display" }}>
            Por Que Entrar no Grupo?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#F5F0E8] p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl mb-4 text-[#C9A96E] font-bold">01</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#2A5C3E] mb-4" style={{ fontFamily: "Playfair Display" }}>
                Peças Exclusivas
              </h3>
              <p className="text-sm md:text-base text-[#6B7A6B]" style={{ fontFamily: "Lato" }}>
                Curadoria cuidadosa de peças únicas com história e autenticidade, selecionadas especialmente para colecionadores e designers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F0E8] p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl mb-4 text-[#C9A96E] font-bold">02</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#2A5C3E] mb-4" style={{ fontFamily: "Playfair Display" }}>
                Lançamentos Primeiro
              </h3>
              <p className="text-sm md:text-base text-[#6B7A6B]" style={{ fontFamily: "Lato" }}>
                Seja o primeiro a conhecer novos itens antes de qualquer outro lugar. Acesso exclusivo e prioritário aos melhores achados.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F0E8] p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl mb-4 text-[#C9A96E] font-bold">03</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#2A5C3E] mb-4" style={{ fontFamily: "Playfair Display" }}>
                Conteúdo Educativo
              </h3>
              <p className="text-sm md:text-base text-[#6B7A6B]" style={{ fontFamily: "Lato" }}>
                Aprenda sobre história, estilos e técnicas de restauração. Conteúdo exclusivo sobre decoração e colecionismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel 1: Peças em Destaque */}
      <section id="pecas" className="py-12 md:py-20 px-4 bg-[#F5F0E8]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2A5C3E] mb-2 md:mb-4" style={{ fontFamily: "Playfair Display" }}>
            Peças em Destaque
          </h2>
          <p className="text-center text-[#6B7A6B] mb-8 md:mb-12 text-sm md:text-base" style={{ fontFamily: "Lato" }}>
            Deslize para descobrir nossa coleção exclusiva
          </p>
          <Carousel images={carouselImages.featured} autoPlay={true} interval={3500} />
          <div className="mt-8 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold transition-all duration-300 active:scale-97">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Carrossel 2: Nossa Coleção */}
      <section className="py-12 md:py-20 px-4 bg-[#FAF8F4]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2A5C3E] mb-2 md:mb-4" style={{ fontFamily: "Playfair Display" }}>
            Nossa Coleção
          </h2>
          <p className="text-center text-[#6B7A6B] mb-8 md:mb-12 text-sm md:text-base" style={{ fontFamily: "Lato" }}>
            Explore mais peças incríveis
          </p>
          <Carousel images={carouselImages.collection} autoPlay={true} interval={4000} />
          <div className="mt-8 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold transition-all duration-300 active:scale-97">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Carrossel 3: Decoração */}
      <section className="py-12 md:py-20 px-4 bg-[#F5F0E8]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2A5C3E] mb-2 md:mb-4" style={{ fontFamily: "Playfair Display" }}>
            Decoração
          </h2>
          <p className="text-center text-[#6B7A6B] mb-8 md:mb-12 text-sm md:text-base" style={{ fontFamily: "Lato" }}>
            Peças que transformam ambientes
          </p>
          <Carousel images={carouselImages.decoracao} autoPlay={true} interval={3800} />
          <div className="mt-8 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold transition-all duration-300 active:scale-97">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Carrossel 4: Arte */}
      <section className="py-12 md:py-20 px-4 bg-[#FAF8F4]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2A5C3E] mb-2 md:mb-4" style={{ fontFamily: "Playfair Display" }}>
            Arte e Escultura
          </h2>
          <p className="text-center text-[#6B7A6B] mb-8 md:mb-12 text-sm md:text-base" style={{ fontFamily: "Lato" }}>
            Obras de valor histórico e artístico
          </p>
          <Carousel images={carouselImages.arte} autoPlay={true} interval={4200} />
          <div className="mt-8 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold transition-all duration-300 active:scale-97">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Carrossel 5: Móveis */}
      <section className="py-12 md:py-20 px-4 bg-[#F5F0E8]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2A5C3E] mb-2 md:mb-4" style={{ fontFamily: "Playfair Display" }}>
            Móveis Antigos
          </h2>
          <p className="text-center text-[#6B7A6B] mb-8 md:mb-12 text-sm md:text-base" style={{ fontFamily: "Lato" }}>
            Peças clássicas e funcionais
          </p>
          <Carousel images={carouselImages.moveis} autoPlay={true} interval={3600} />
          <div className="mt-8 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold transition-all duration-300 active:scale-97">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section id="prova-social" className="py-12 md:py-20 px-4 bg-[#2A5C3E]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <p className="text-4xl md:text-6xl font-bold text-[#C9A96E] mb-4" style={{ fontFamily: "Playfair Display" }}>
              150+
            </p>
            <p className="text-lg md:text-xl text-[#F5F0E8]" style={{ fontFamily: "Lato" }}>
              Colecionadores já estão no grupo
            </p>
          </div>

          <div className="bg-[#1F4228] p-6 md:p-8 rounded-lg mt-8 md:mt-12">
            <p className="text-base md:text-lg text-[#F5F0E8] italic mb-4" style={{ fontFamily: "Lato" }}>
              "Encontrei peças únicas que ninguém mais tinha. O grupo é um verdadeiro achado para quem valoriza autenticidade e história."
            </p>
            <p className="text-[#C9A96E] font-bold text-sm md:text-base" style={{ fontFamily: "Playfair Display" }}>
              Cliente satisfeito
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-[#FAF8F4]">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2A5C3E] mb-4 md:mb-6" style={{ fontFamily: "Playfair Display" }}>
            Pronto para Descobrir Peças Únicas?
          </h2>
          <p className="text-base md:text-lg text-[#6B7A6B] mb-6 md:mb-8" style={{ fontFamily: "Lato" }}>
            Junte-se a nossa comunidade de colecionadores e designers que buscam autenticidade e exclusividade.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:scale-105 active:scale-97"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              ENTRAR NO GRUPO VIP
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A5C3E] text-[#F5F0E8] py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base" style={{ fontFamily: "Playfair Display" }}>
                Navegação
              </h3>
              <ul className="space-y-2 text-xs md:text-sm" style={{ fontFamily: "Lato" }}>
                <li>
                  <a href="#por-que" className="hover:text-[#C9A96E] transition-colors">
                    Por Que Entrar
                  </a>
                </li>
                <li>
                  <a href="#pecas" className="hover:text-[#C9A96E] transition-colors">
                    Peças em Destaque
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base" style={{ fontFamily: "Playfair Display" }}>
                Redes Sociais
              </h3>
              <ul className="space-y-2 text-xs md:text-sm" style={{ fontFamily: "Lato" }}>
                <li>
                  <a
                    href="https://www.instagram.com/marielaforesttiantiquario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C9A96E] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base" style={{ fontFamily: "Playfair Display" }}>
                Sobre
              </h3>
              <p className="text-xs md:text-sm" style={{ fontFamily: "Lato" }}>
                Antiguidades com alma. Curadoria de Mariela Forestti para colecionadores e designers que valorizam autenticidade.
              </p>
            </div>
          </div>

          <div className="border-t border-[#1F4228] pt-6 md:pt-8 text-center text-xs md:text-sm" style={{ fontFamily: "Lato" }}>
            <p>&copy; 2026 Mariela Forestti Antiguário. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      {showStickyButton && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#2A5C3E] hover:bg-[#1F4228] text-[#C9A96E] font-bold shadow-lg transition-all duration-300 hover:scale-110 active:scale-97 rounded-full px-4 md:px-6 py-4 md:py-6"
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}
