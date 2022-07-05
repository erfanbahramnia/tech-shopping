// phone's images
// first phone
import iphone13ProMax_1 from "./coduct/phones/iphone13-promax-1.jpg";
import iphone13ProMax_2 from "./coduct/phones/iphone13-promax-2.jpg";
import iphone13ProMax_3 from "./coduct/phones/iphone13-promax-3.jpg";
// second phone
import iphone13_1 from "./coduct/phones/iphone13-1.jpg";
import iphone13_2 from "./coduct/phones/iphone13-2.jpg";
import iphone13_3 from "./coduct/phones/iphone13-3.jpg";
// third phone
import m11Ultra_1 from "./coduct/phones/m11-ultra-1.jpg";
import m11Ultra_2 from "./coduct/phones/m11-ultra-2.jpg";
import m11Ultra_3 from "./coduct/phones/m11-ultra-3.jpg";
// forth phone
import s22Ultra_1 from "./coduct/phones/s22-ultra-1.jpg";
import s22Ultra_2 from "./coduct/phones/s22-ultra-2.jpg";
import s22Ultra_3 from "./coduct/phones/s22-ultra-3.jpg";
// fifth phone
import zFold3_1 from "./coduct/phones/z fold-3-1.jpg";
import zFold3_2 from "./coduct/phones/z fold-3-2.jpg";
import zFold3_3 from "./coduct/phones/z fold-3-3.jpg";

// laptop's images
// first laptop
import MacbookPro_1 from "./coduct/laptops/macbook-pro-mk193-1.jpg";
import MacbookPro_2 from "./coduct/laptops/macbook-pro-mk193-2.jpg";
import MacbookPro_3 from "./coduct/laptops/macbook-pro-mk193-3.jpg";
// second laptop
import MacbookAir_1 from "./coduct/laptops/MacBook-Air-2020-1.jpg";
import MacbookAir_2 from "./coduct/laptops/MacBook-Air-2020-2.jpg";
import MacbookAir_3 from "./coduct/laptops/MacBook-Air-2020-3.jpg";
// third laptop
import RazerBlade15Advanceed_1 from "./coduct/laptops/razer-blade15advanceed-1.jpg";
import RazerBlade15Advanceed_2 from "./coduct/laptops/razer-blade15advanceed-2.jpg";
import RazerBlade15Advanceed_3 from "./coduct/laptops/razer-blade15advanceed-3.jpg";
// forth laptop
import ZephyrusM16_1 from "./coduct/laptops/zephyrus-m16-1.jpg";
import ZephyrusM16_2 from "./coduct/laptops/zephyrus-m16-2.jpg";
import ZephyrusM16_3 from "./coduct/laptops/zephyrus-m16-3.jpg";
// fifth laptop
import legion_5N_1 from "./coduct/laptops/legion5-n-1.jpg";
import legion_5N_2 from "./coduct/laptops/legion5-n-2.jpg";
import legion_5N_3 from "./coduct/laptops/legion5-n-3.jpg";

// camera's images
// first camera
import sonyA7Riv_1 from "./coduct/cameras/sony-a7riv-1.jpg";
import sonyA7Riv_2 from "./coduct/cameras/sony-a7riv-2.jpg";
import sonyA7Riv_3 from "./coduct/cameras/sony-a7riv-3.jpg";
// second camera
import canonEOS90D_1 from "./coduct/cameras/canon-eos90d-1.jpg"
import canonEOS90D_2 from "./coduct/cameras/canon-eos90d-2.jpg"
import canonEOS90D_3 from "./coduct/cameras/canon-eos90d-3.jpg"
// third camera
import nikonD7500_1 from "./coduct/cameras/nikon-d7500-1.jpg"
import nikonD7500_2 from "./coduct/cameras/nikon-d7500-2.jpg"
import nikonD7500_3 from "./coduct/cameras/nikon-d7500-3.jpg"


const datas = [
    {
        name: "Nikon D7500",
        category: "camera",
        image1: nikonD7500_1,
        price: "2199",
        rate: 4.4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: nikonD7500_2,
            image3: nikonD7500_3,
            weight: 720,
            camera: 21,
            movie_rezoloton: "4k",
            framePerSec: 50,
            demanstion: "13x10x7 mm",
            color: ["balck"],
        },
    },
    {
        name: "Canon EOS 90D",
        category: "camera",
        image1: canonEOS90D_1,
        price: "2899",
        rate: 4.6,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: canonEOS90D_2,
            image3: canonEOS90D_3,
            weight: 670,
            camera: 34,
            movie_rezoloton: "4k",
            framePerSec: 120,
            demanstion: "77x105x141 mm",
            color: ["balck"],
        },
    },
    {
        name: "Sony A7riv",
        category: "camera",
        image1: sonyA7Riv_1,
        price: "3999",
        rate: 4.9,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: sonyA7Riv_2,
            image3: sonyA7Riv_3,
            weight: 670,
            camera: 50,
            movie_rezoloton: "4k",
            framePerSec: 60,
            demanstion: "129x96x78 mm",
            color: ["white", "balck"],
        },
    },
    {
        name: "legion 5-N",
        category: "laptop",
        image1: legion_5N_1,
        price: "1999",
        rate: 4.5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: legion_5N_2,
            image3: legion_5N_3,
            display: 15.6,
            chip: "AMD Ryzen 7",
            chipModel: "5800H",
            ram: 16,
            ramModel: "DDR4",
            gpu: "RTX 3060",
            gpuStorage: 6,
            storage: "2 TB",
            storageModel: "SSD",
            color: ["white"],
        },
    },
    {
        name: "Zephyrus M16",
        category: "laptop",
        image1: ZephyrusM16_1,
        price: "2199",
        rate: 4.7,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: ZephyrusM16_2,
            image3: ZephyrusM16_3,
            display: 16,
            chip: "Intel core i9",
            chipModel: "11900H",
            ram: 16,
            ramModel: "DDR4",
            gpu: "RTX 3060",
            gpuStorage: 6,
            storage: "1 TB",
            storageModel: "SSD",
            color: ["black", "gray"],
        },
    },
    {
        name: "Razer Blade 15 Advanceed",
        category: "laptop",
        image1: RazerBlade15Advanceed_1,
        price: "2399",
        rate: 4.6,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: RazerBlade15Advanceed_2,
            image3: RazerBlade15Advanceed_3,
            display: 15.6,
            chip: "Intel core i7",
            chipModel: "10875H",
            ram: 16,
            ramModel: "DDR4",
            gpu: "RTX 2070 super",
            gpuStorage: 8,
            storage: "512 GB",
            storageModel: "SSD",
            color: ["black"],
        },
    },
    {
        name: "MacBook Air 2022",
        category: "laptop",
        image1: MacbookAir_1,
        price: "2199",
        rate: 4.4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: MacbookAir_2,
            image3: MacbookAir_3,
            display: 13,
            chip: "M1",
            chipModel: "apple",
            ram: 8,
            ramModel: "Unified",
            gpu: "8core Apple-designed",
            gpuStorage: "Unified",
            storage: "512 GB",
            storageModel: "SSD",
            color: ["gray", "white"],
        },
    },
    {
        name: "MacBook Pro MK193",
        category: "laptop",
        image1: MacbookPro_1,
        price: "3299",
        rate: 4.9,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: MacbookPro_2,
            image3: MacbookPro_3,
            display: 16.2,
            chip: "M2 Pro",
            chipModel: "apple",
            ram: 16,
            ramModel: "Unified",
            gpu: "unified",
            gpuStorage: "Unified",
            storage: "1 TB",
            storageModel: "SSD",
            color: ["gray", "blue", "white"],
        },
    },
    {
        name: "iphone 13 promax",
        category: "phone",
        image1: iphone13ProMax_1,
        price: "1299",
        rate: 4.9,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: iphone13ProMax_2,
            image3: iphone13ProMax_3,
            weight: 240,
            display: "6.7inch",
            camera: 12,
            selfi: 12,
            operatingSystem: "ios",
            chip: "15 bionic",
            ram: 6,
            storage: "512 GB",
            color: ["red", "black", "white"],
        },
    },
    {
        name: "iphone 13",
        category: "phone",
        image1: iphone13_1,
        price: "999",
        rate: 4.5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: iphone13_2,
            image3: iphone13_3,
            weight: 174,
            display: "6.0inch",
            camera: 12,
            selfi: 12,
            operatingSystem: "ios",
            chip: "15 bionic",
            ram: 4,
            storage: "256 GB",
            color: ['blue', "green", "black"],
        },
    },
    {
        name: "m11 ultra",
        category: "phone",
        image1: m11Ultra_1,
        price: "1099",
        rate: 4.8,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: m11Ultra_2,
            image3: m11Ultra_3,
            weight: 234,
            display: "6.81inch",
            camera: 50,
            selfi: 20,
            operatingSystem: "android",
            chip: "Snapdragon 888",
            ram: 12,
            storage: "512 GB",
            color: ["red", "blue", "black"]
        },
    },
    {
        name: "Samsung S22 Ultra",
        category: "phone",
        image1: s22Ultra_1,
        price: "1199",
        rate: 4.9,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: s22Ultra_2,
            image3: s22Ultra_3,
            weight: 228,
            display: "6.8inch",
            camera: 108,
            selfi: 40,
            operatingSystem: "android",
            chip: "Snapdragon 8 Gen 1",
            ram: 12,
            storage: "1 TB",
            color: ["black", "white", "blue"],
        },
    },
    {
        name: "Z Fold 3",
        category: "phone",
        price: "1599",
        image1: zFold3_1,
        rate: 4.7,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe.",
        details: {
            image2: zFold3_2,
            image3: zFold3_3,
            weight: 271,
            display: "6.0inch",
            camera: 12,
            selfi: 2,
            operatingSystem: "android",
            chip: "Snapdragon 888",
            ram: 12,
            storage: "512 GB",
            color: ["black", "white", "yellow"],
        },
    },
];

export default datas;