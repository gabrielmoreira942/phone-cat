const phones = [
  {
    name: "Motorola - Moto G9",
    image: "https://s2.glbimg.com/5eJxCtx9Y9ttIYy2rFbrTWrRDQU=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/L/C/AU196BSTqXB62pNme0Og/moto-g9-plus-moto-g9-play.jpg",
    description: "Câmera tripla com sensor de 48 MPTire fotos mais nítidas e brilhantes em qualquer condição de luz graças ao sensor de 48 MP com tecnologia Quad Pixel. Faça retratos com fundo desfocado usando o sensor de profundidade. Além disso, tire fotos bem de perto sem perder nenhum detalhe com a câmera Macro.Superbateria para até dois diasFaça tudo que quiser sem se preocupar com a duração da bateria. A bateria de 5000 mAh permite que você fique até dois dias sem recarregar."
  },
  {
    name: "Xiaomi - POCO X3 PRO",
    image: "https://s.zst.com.br/cms-assets/2021/07/design-poco-x3-pro.jpg",
    description: "O POCO X3 ganhou uma versão pro que vai deixar você que ama jogos mobile e exige desempenho máximo de todos os componentes, impressionado! Conheça o smartphone que traz exatamente o que você precisa e mais velocidade, performance fluida, tela projetada para imersão total em jogos com gráficos no ultra, bateria de altíssima capacidade, alto-falantes duplos e tecnologia ufs 3.1 de armazenamento."
  },
  {
    name: "Samsung - Galaxy S20 FE",
    image: "https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-s20-fe-128gb-cloud-navy-4g-6gb-ram-tela-65-cam-tripla-selfie-32mp/magazineluiza/155629800/0007bbdc665749ec107d860c3a4b8b2f.jpg",
    description: "Este é o smartphone para pessoas que querem tudo. Este é o smartphone feito sob medida para fãs de todos os tipos. Então, se você é fã de fotografia, jogos ou adora deixar seu feed repleto de tudo que o inspira, Samsung reuni a combinação definitiva de inovação S20. Este é o smartphone que oferece o que você deseja, para você fazer mais daquilo que ama. Este é o Galaxy S20 FE."
  },
  {
    name: "Xiaomi - POCO X3 NFC",
    image: "https://s2.glbimg.com/LHiFGiAcr2uDMCegxjMR1IiKfNA=/147x54:1703x1180/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/m/U/RjfHr6TZGcBVzBeXyq1w/poco-x3-11.png",
    description: " Poco X3 NFC é um importante celular da Xiaomi lançado em 2020. Ele foi criado para otimizar a experiência com jogos digitais, tanto que ostenta tela de 120 Hz e bateria de 5.160 mAh na ficha técnica. O modelo é comercializado pelo preço sugerido de R$ 2.960 na loja oficial. Talvez seja possível encontrar produtos não oficiais por valores mais baixos, mas eles não contam com garantia da Xiaomi Brasil."
  },
  {
    name: "Apple - iPhone 13 Pro Max",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346295",
    description: "iPhone 13 Pro Max. O maior upgrade do sistema de câmera Pro até hoje. Tela Super Retina XDR com ProMotion para uma experiência mais rápida e responsiva. Chip A15 Bionic com velocidade impressionante. 5G ultrarrápido*. Design resistente."
  },
  {
    name: "Xiaomi - Note 10S",
    image: "https://m.media-amazon.com/images/I/81sZamLSPWL._AC_SL1500_.jpg",
    description: " Redmi Note 10S é um smartphone Android de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários. Tem uma enorme tela Touchscreen de 6.43 polegadas com uma resolução de 2400x1080 pixel."
  },
  {
    name: "LG - K62",
    image: "https://imgs.casasbahia.com.br/55012964/1xg.jpg?imwidth=500",
    description: "O Smartphone LG K62 é ideal para você que busca ter um aparelho tecnológico! Com Tela de 6.6 polegadas de ótima qualidade para que você tenha a melhor experiência ao utilizar para tirar fotos ou aproveitar todas as novidades. Perfeito para quem não abre mão de tirar ótimas selfies, ele possui Câmera Quádrupla de 48MP+5MP+2MP+2MP e uma poderosa selfie de 13MP. Outro ponto que se destaca é o seu design moderno. Tudo o que você precisa para garantir conectividade por onde passar."
  },
  {
    name: "Xiaomi - Poco M4 Pro 5G",
    image: "https://m.media-amazon.com/images/I/61uU1icIPTL._AC_SL1200_.jpg",
    description: "O Poco M4 Pro 5G é um smartphone Android de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários. Tem uma enorme tela Touchscreen de 6.6 polegadas com uma resolução de 2400x1080 pixel."
  },
  {
    name: "Samsung - Galaxy A13",
    image: "https://i.zst.com.br/thumbs/12/28/3a/-550637268.jpg",
    description: "Amplie sua visão com o display de 6,6 do smartphone Galaxy A13 da Samsung. Com a tecnologia FHD+, seu conteúdo de todos os dias será nítido, bem definido e claro. Ele se torna elegante e dá suavidade ao toque. As curvas refinadas o tornam confortável para segurar e facilitam a navegação na tela. Mais rápido e mais armazenamento, combina a potência de processamento Octa-core com 4GB de RAM para desempenho mais rápido e eficiente."
  },
  {
    name: "Motorola - Moto G71",
    image: "https://m.media-amazon.com/images/I/51YgrH0lIKL._AC_SL1200_.jpg",
    description: "O Motorola Moto G71 5G é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.4 polegadas com uma resolução de 2400x1080 pixels. As funcionalidades oferecidas pelo Motorola Moto G71 5G são muitas e inovadoras."
  },
  {
    name: "Samsung - Galaxy J8",
    image: "https://static.zattini.com.br/produtos/smartphone-samsung-galaxy-j8-64gb-prata-4g/64/817-9468-064/817-9468-064_zoom1.jpg?ts=1599692691",
    description: "Samsung Galaxy J8 é um smartphone Android fabricado pela Samsung Electronics. Anunciado em 22 de maio de 2018 e lançado no mesmo dia, junto com o Galaxy J4 e o Galaxy J6, o J8 é um smartphone intermediário e sucessor do Galaxy J7. Ele apresenta recursos de hardware e software semelhantes ao seu colega topo de linha."
  }
]


export default phones;