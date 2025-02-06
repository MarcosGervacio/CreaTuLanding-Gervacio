const products = [
    {
        id: 1,
        title: 'Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4',
        price: '80000',
        category: 'procesadores',
        description: 'Versión de PCI Express : PCIe 3.0 x8',
        image: 'https://mexx-img-2019.s3.amazonaws.com/36216_2.jpeg',
    },
    {
        id: 2,
        title: 'Procesador Intel Core i5 10400 4.3 Ghz Comet Lake 1200',
        price: '180000',
        category: 'procesadores',
        description: 'GPU integrado : Gráficos HD Intel 630',
        image: 'https://mexx-img-2019.s3.amazonaws.com/37557_1.jpeg',
    },
    {
        id: 3,
        title: 'Monitor Led 19" Daewoo 75Hz 5Ms DW-X19KN',
        price: '100000',
        category: 'monitores',
        description: 'Resolución : 1400x900 HD',
        image: 'https://mexx-img-2019.s3.amazonaws.com/Monitor-Led-19-Daewoo-60Hz-5Ms-DW-X19KN_48294_1.jpeg',
    },
    {
        id: 4,
        title: 'Monitor Gamer 22" Samsung Full Hd 75Hz Ips 5Ms T350FHL',
        price: '150000',
        category: 'monitores',
        description: 'Resolución : 1920 x 1080',
        image: 'https://mexx-img-2019.s3.amazonaws.com/39460_1.jpeg',
    },
    {
        id: 5,
        title: 'Fuente Sentey SNP-650 650W 80 Plus White',
        price: '70000',
        category: 'fuentes',
        description: 'CONECTORES : Motherboard 20+4pines x 1, CPU +12V 4+4pines x 1, SATA 5pines x 6, Molex 4pines x 3, Floppy 4pines x 1, PCI-E 6pines x 1, PCI-E 6+2pines x 1',
        image: 'https://mexx-img-2019.s3.amazonaws.com/40219_1.jpeg',
    },
    {
        id: 6,
        title: 'Fuente Sentey HBP600-GS 600W 80 Plus Bronze',
        price: '80000',
        category: 'fuentes',
        description: 'Dimensiones de la fuente (mm) : 160mm (L) x 150mm (W) x 86mm (H)',
        image: 'https://mexx-img-2019.s3.amazonaws.com/fuente-sentey-600w_41993_3.jpeg?v86',
    },
    {
        id: 7,
        title: 'Placa De Video LHR GeForce RTX 3050 8Gb Msi Ventus 2x Xs Oc',
        price: '300000',
        category: 'placas',
        description: 'Memoria : GDDR6 8GB',
        image: 'https://mexx-img-2019.s3.amazonaws.com/Placa-De-Video-LHR-GeForce-RTX-3050-8Gb-Msi-Ventus-2x-Xs-Oc_46952_1.jpeg',
    },
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products);
        }, 1000);
    });
};

export const getProduct = (id) =>{
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter((prod) => prod.category === category));
        }, 1000);
    });
};