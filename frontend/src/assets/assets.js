import logo from './logo.png'
import header from './header.png'
import clothing from './clothing.jpg'
import gifting from './gifting.jpg'
import home_decor from './homedecor.jpg'
import accessories from './accessories.jpg'
import hexagon from './hexagon.png'
import hero_key from './hero_key.png'
import girl from './girl.png'
import boy from './boy.png'
import insta from './instagram.svg'
import linkedin from './linkedin.svg'
import clothing_1 from './clothing_1.jpg'
import clothing_2 from './clothing_2.jpg'
import clothing_3 from './clothing_3.jpg'
import clothing_4 from './clothing_4.png'
import gifting_1 from './gifting_1.jpg'
import gifting_2 from './gifting_2.jpg'
import gifting_3 from './gifting_3.jpg'
import gifting_4 from './gifting_4.png'
import gifting_5 from './gifting_5.jpg'
import gifting_6 from './gifting_6.jpg'
import gifting_7 from './gifting_7.jpg'
import gifting_8 from './gifting_8.jpg'
import home_1 from './home_1.jpg'
import home_2 from './home_2.jpg'
import home_3 from "./home_3.jpg"
import home_4 from "./home_4.png"
import home_5 from "./home_5.jpg"
import accessory_1 from "./accessory_1.jpg"
import accessory_2 from "./accessory_2.jpg"
import accessory_3 from "./accessory_3.jpg"
import accessory_4 from "./accessory_4.jpg"
import accessory_5 from "./accessory_5.jpg"

export const assets = {
    logo,
    header,
    hexagon,
    hero_key,
    insta,
    linkedin,
    clothing_1
}

export const category_list = [
    {
        name: "Clothing",
        image: clothing,
        id: "clothing"
    }, 
    {
        name: "Home Decor",
        image: home_decor,
        id: "home_decor"
    }, 
    {
        name: "Accessories",
        image: accessories,
        id: "accessories"
    }, 
    {
        name: "Gifting",
        image: gifting,
        id: "gifting"
    }
]

export const review_list = [
    {
        name: "Ira Sinha",
        text: 'Absolutely loved the quality and detail! Will definitely order again.',
        avatar: girl
    }, 
    {
        name: "Rohan Shukla", 
        text: "Quick delivery and the crochet keychain was super cute.",
        avatar: boy
    },
    {
        name: "Meena Kumari",
        text: "Thanks a lot! The flowers were appreciated by everyone at my sister's party.",
        avatar: girl
    }, 
    {
        name: "Rudraneel Dutta", 
        text: "Absolutely love this crochet scarf — cozy feel and beautiful design. A winter favorite!",
        avatar: boy

    },
    {
        name: "Snighda Shah", 
        text: "This crochet wall piece completely transformed my space — it's delicate, detailed, and feels so personal. Love the cozy vibe it brings to my home!",
        avatar: girl
    }
]


export const product_list = [
        {
            id: 1,
            category: "clothing",
            name: "Hexagon Granny Cardigan",
            description: "A lightweight boho-style cardigan with intricate detailing, perfect for layering.",
            price: 1200,
            image: clothing_1
        },
        {
            id: 2,
            category: "clothing",
            name: "Sun Lace Bloom Top",
            description: "A cozy, colorful sweater made from traditional granny squares.",
            price: 2550,
            image: clothing_2
        },
        {
          id: 3,
          category: "clothing",
          name: "Moonmist Shrug",
          description: "Elegant shrug with lace patterns, great for formal or casual occasions.",
          price: 950,
          image: clothing_3,
        },
        {
          id: 4,
          category: "clothing",
          name: "Tassel Wrap",
          description: "Soft and luxurious scarf with subtle tassels — perfect for breezy evenings or winter layering.",
          price: 2200,
          image: clothing_4
        },
        {
          id: 5,
          category: "gifting",
          name: "Cherry Bow Bag Charm",
          description: "Mini cherry keychain, perfect for gifting or party favors.",
          price: 800,
          image: gifting_1
        },
        {
          id: 6,
          category: 'gifting',
          name: "Mini Amigurumi Bunny",
          description: "Soft stuffed bunny, hand-stitched with pastel yarn.",
          price: 2860,
          image: gifting_2
        },
        {
          id: 7,
          category: "gifting",
          name: "Golden Meadow Bunch",
          description: "Bright and cheerful, this bouquet brings a field of sunshine into any room.",
          price: 2890,
          image: gifting_3
        },
        {
          id: 8,
          category: "gifting",
          name: "Scarlet Bloom",
          description: "A timeless cluster of crimson crochet roses for elegant gifting or décor.",
          price: 4500,
          image: gifting_4
        },
        {
          id: 9,
          category: "gifting", 
          name: "Tulip Whirl Charm",
          description: "A delicate single tulip stem, perfect for a subtle handmade statement.",
          price: 1500,
          image: gifting_5
        },
        {
          id: 10,
          category: "gifting",
          name: "Tulip Nest",
          description: "A graceful bunch of pastel tulips bundled with care — soft, sweet, and lasting.",
          price: 5280,
          image: gifting_6
        },
        {
          id: 11,
          category: "gifting",
          name: "Whimsy Readings",
          description: "Set of 3 delicate bookmarks with floral motifs — great for book lovers.",
          price: 950,
          image: gifting_7
        },
        {
          id: 12,
          category: "gifting",
          name: "Sunflower Book Sleeve",
          description: "Book sleeve made with lots of love - perfect for keeping your books safe on travels.",
          price: 1890,
          image: gifting_8
        },
        {
          id: 13,
          category: "home_decor",
          name: "Meadow Loom",
          description: "Bohemian-style hanging piece to bring texture and warmth to any wall.",
          price: 1600,
          image: home_1
        },
        {
          id: 14,
          category: "home_decor",
          name: "Coaster Set",
          description: "Colorful set of 6 drink coasters — washable and eco-friendly.",
          price: 2300,
          image: home_2
        },
        {
          id: 15,
          category: "home_decor",
          name: "Cactus Pillows",
          description: "Elegant cushion in a cactii design to elevate your living space.",
          price: 1500,
          image: home_3
        },
        {
          id: 16,
          category: "home_decor",
          name: "Doily Table Centerpiece",
          description: "Classic white doily with lace edges, ideal for center tables or dressers.",
          price: 1200,
          image: home_4
        },
        {
          id: 17,
          category: "home_decor",
          name: "Hanging Plants",
          description: "Crochet hanging plants, perfect for indoor greenery.",
          price: 2980,
          image: home_5
        },
        {
          id: 18,
          category: "accessories",
          name: "Crochet Hair Scrunchie Set",
          description: "Pack of 3 colorful scrunchies — gentle on hair and stylish.",
          price: 560,
          image: accessory_1
        },
        {
          id: 19,
          category: "accessories",
          name: "LunaThread Drops",
          description: "Lightweight and intricate earrings with tassel detailing.",
          price: 1499,
          image: accessory_2
        },
        {
          id: 20,
          category: "accessories",
          name: "Cloud Bag",
          description: "Fluffy, large capacity bag to satisfy your everyday needs.",
          price: 2500,
          image: accessory_3
        },
        {
          id: 21,
          category: "accessories",
          name: "Selena Belt",
          description: "Statement waist belt made using raffia and embroidered flowers.",
          price: 3850,
          image: accessory_4
        },
        {
          id: 22,
          category: "accessories",
          name: "Crochet Crown",
          description: "Adjustable headband/hair-tie — perfect for girls and teens.",
          price: 560,
          image: accessory_5

        }
]