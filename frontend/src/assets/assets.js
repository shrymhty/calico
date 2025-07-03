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

export const assets = {
    logo,
    header,
    hexagon,
    hero_key,
    insta,
    linkedin
}

export const category_list = [
    {
        name: "Clothing",
        image: clothing
    }, 
    {
        name: "Home Decor",
        image: home_decor
    }, 
    {
        name: "Accessories",
        image: accessories
    }, 
    {
        name: "Gifting",
        image: gifting
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
            category: "clothing",
            name: "Hexagon Granny Cardigan",
            description: "A lightweight boho-style cardigan with intricate detailing, perfect for layering.",
            price: 1200,
            image: "https://via.placeholder.com/150?text=Cardigan"
        },
        {
            category: "clothing",
            name: "Sun Lace Bloom Top",
            description: "A cozy, colorful sweater made from traditional granny squares.",
            price: 2550,
            image: "https://via.placeholder.com/150?text=Cardigan"
        },
        {
          category: "clothing",
          name: "Moonmist Shrug",
          description: "Elegant shrug with lace patterns, great for formal or casual occasions.",
          price: 950,
          image: "https://via.placeholder.com/150?text=Shrug",
        },
        {
          category: "clothing",
          name: "Tassel Wrap",
          description: "Soft and luxurious scarf with subtle tassels — perfect for breezy evenings or winter layering.",
          price: 2200,
          image: "https://via.placeholder.com/150?text=shawl"
        },
        {
          category: "gifting",
          name: "Cherry Bow Bag Charm",
          description: "Mini cherry keychain, perfect for gifting or party favors.",
          price: 800,
          image: "https://via.placeholder.com/150?text=Heart+Keychain"
        },
        {
          category: 'gifting',
          name: "Mini Amigurumi Bunny",
          description: "Soft stuffed bunny, hand-stitched with pastel yarn.",
          price: 2860,
          image: "https://via.placeholder.com/150?text=Amigurumi+Bunny"
        },
        {
          category: "gifting",
          name: "Golden Meadow Bunch",
          description: "Bright and cheerful, this bouquet brings a field of sunshine into any room.",
          price: 2890,
          image: "https://via.placeholder.com/150?text=Flower+Bouquet"
        },
        {
          category: "gifting",
          name: "Scarlet Bloom",
          description: "A timeless cluster of crimson crochet roses for elegant gifting or décor.",
          price: 3500,
          image: "https://via.placeholder.com/150?text=Flower+Bouquet"
        },
        {
          category: "gifting", 
          name: "Tulip Whirl Charm",
          decsription: "A delicate single tulip stem, perfect for a subtle handmade statement.",
          price: 1500,
          image: "https://via.placeholder.com/150?text=Flower+Bouquet"
        },
        {
          category: "gifting",
          name: "Tulip Nest",
          description: "A graceful bunch of pastel tulips bundled with care — soft, sweet, and lasting.",
          price: 5280,
          image: "https://via.placeholder.com/150?text=Flower+Bouquet"
        },
        {
          category: "gifting",
          name: "Whimsy Readings",
          description: "Set of 3 delicate bookmarks with floral motifs — great for book lovers.",
          price: 950,
          image: "https://via.placeholder.com/150?text=Bookmarks"
        },
        {
          category: "gifting",
          name: "Sunflower Book Sleeve",
          description: "Book sleeve made with lots of love - perfect for keeping your books safe on travels.",
          price: 1890,
          image: "https://via.placeholder.com/150?text=Name+Keychain"
        },
        {
          category: "home",
          name: "Meadow Loom",
          description: "Bohemian-style hanging piece to bring texture and warmth to any wall.",
          price: 1600,
          image: "https://via.placeholder.com/150?text=Wall+Hanging"
        },
        {
          category: "home",
          name: "Coaster Set",
          description: "Colorful set of 6 drink coasters — washable and eco-friendly.",
          price: 2300,
          image: "https://via.placeholder.com/150?text=Coasters"
        },
        {
          category: "home",
          name: "Cactus Pillows",
          description: "Elegant cushion in a cactii design to elevate your living space.",
          price: 1500,
          image: "https://via.placeholder.com/150?text=Cushion+Cover"
        },
        {
          category: "home",
          name: "Doily Table Centerpiece",
          description: "Classic white doily with lace edges, ideal for center tables or dressers.",
          price: 1200,
          image: "https://via.placeholder.com/150?text=Doily"
        },
        {
          category: "home",
          name: "Hanging Plants",
          description: "Crochet hanging plants, perfect for indoor greenery.",
          price: 2980,
          image: "https://via.placeholder.com/150?text=Plant+Holder"
        },
        {
          category: "accessories",
          name: "Crochet Hair Scrunchie Set",
          description: "Pack of 3 colorful scrunchies — gentle on hair and stylish.",
          price: 450,
          image: "https://via.placeholder.com/150?text=Scrunchies"
        },
        {
          category: "accessories",
          name: "LunaThread Drops",
          description: "Lightweight and intricate earrings with tassel detailing.",
          price: 1499,
          image: "https://via.placeholder.com/150?text=Earrings"
        },
        {
          category: "accessories",
          name: "Cloud Bag",
          description: "Fluffy, large capacity bag to satisfy your everyday needs.",
          price: 2500,
          image: "https://via.placeholder.com/150?text=Tote+Bag"
        },
        {
          category: "accesspries",
          name: "Selena Belt",
          description: "Statement waist belt made using raffia and embroidered flowers.",
          price: 3850,
          image: "https://via.placeholder.com/150?text=Mobile+Pouch"
        },
        {
          category: "accessories",
          name: "Crochet Crown",
          description: "Adjustable headband/hair-tie — perfect for girls and teens.",
          price: 560,
          image: "https://via.placeholder.com/150?text=Headband"

        }
]