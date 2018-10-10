const data = {
  products: [
    {
      id: 1,
      productName: 'IQOS Purple',
      colors: [
        {
          id: 1,
          hex: '#123123',
          description: 'cool color',
          images: [
            'http://iqos.jp/11.png',
            'http://iqos.jp/11big.png',
          ],
        },
        {
          id: 2,
          hex: '#321321',
          description: 'bad color',
          images: [
            'http://iqos.jp/12.png',
            'http://iqos.jp/12big.png',
          ],
        },
      ],
      price: 100,
      currency: '$',
    },
    {
      id: 2,
      productName: 'IQOS Purple',
      colors: [
        {
          id: 3,
          hex: '#123123',
          description: 'cool color',
          images: [
            'http://iqos.jp/23.png',
            'http://iqos.jp/23big.png',
          ],
        },
        {
          id: 4,
          hex: '#321321',
          description: 'bad color',
          images: [
            'http://iqos.jp/24.png',
            'http://iqos.jp/24big.png',
          ],
        },
      ],
      price: 100,
      currency: '$',
      description: 'test description',
    },
  ],
}

export default data
