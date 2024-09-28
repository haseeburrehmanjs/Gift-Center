import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const Rings = () => {
  const [product, setproduct] = useState([])

  // item object 
  useEffect(() => {
    const items = [
      // Rings
      {
        title: "Elegant Gold Ring",
        img: "https://i.pinimg.com/564x/6f/75/cb/6f75cb54fb7908964a265ebcd2a2d2d4.jpg",
        description: "A beautiful gold ring with a modern design.",
        category: "Rings"
      },
      {
        title: "Diamond Engagement Ring",
        img: "https://i.pinimg.com/736x/9e/30/c8/9e30c82e264879e93bf2ce3c0e165822.jpg",
        description: "A stunning diamond ring, perfect for engagements.",
        category: "Rings"
      },
      {
        title: "Silver Band Ring",
        img: "https://i.pinimg.com/564x/f0/8c/4a/f08c4abc28dc13c7ac46ace653e9c086.jpg",
        description: "A sleek silver band for a minimalist style.",
        category: "Rings"
      },
      {
        title: "Ruby Gold Ring",
        img: "https://i.pinimg.com/564x/26/55/2b/26552bb67a958732099fe716b242c1b2.jpg",
        description: "A luxurious gold ring with a radiant ruby gemstone.",
        category: "Rings"
      },
      {
        title: "Sapphire Platinum Ring",
        img: "https://i.pinimg.com/564x/b0/d8/9b/b0d89b100342b7398c838527e33a9cfa.jpg",
        description: "An exquisite platinum ring with a sapphire centerpiece.",
        category: "Rings"
      },
      {
        title: "Classic Wedding Band",
        img: "https://i.pinimg.com/564x/32/a6/0c/32a60c08f7e3983cb569ea5b6637b122.jpg",
        description: "A simple and elegant wedding band made of gold.",
        category: "Rings"
      },
      {
        title: "Emerald Cocktail Ring",
        img: "https://i.pinimg.com/564x/32/62/77/3262772240b767a1e9dc315b0b781d65.jpg",
        description: "A bold emerald ring perfect for special occasions.",
        category: "Rings"
      },
      {
        title: "Vintage Opal Ring",
        img: "https://i.pinimg.com/564x/a6/4a/db/a64adb7fb8553b099244e1ff50345d2b.jpg",
        description: "A vintage-style opal ring with intricate detailing.",
        category: "Rings"
      },

      // Watches
      {
        title: "Classic Leather Watch",
        img: "https://i.pinimg.com/564x/61/8f/49/618f494650aeb7df5a87cc18d8d3d38b.jpg",
        description: "A timeless leather strap watch with a vintage look.",
        category: "Watches"
      },
      {
        title: "Digital Sport Watch",
        img: "https://i.pinimg.com/736x/c5/4a/0f/c54a0fa5338098934d1180acba929d3f.jpg",
        description: "A durable and water-resistant digital watch for active lifestyles.",
        category: "Watches"
      },
      {
        title: "Stainless Steel Watch",
        img: "https://i.pinimg.com/564x/9f/58/c8/9f58c8e8bab2843230d049c4808962c0.jpg",
        description: "A sleek and elegant stainless steel watch for formal occasions.",
        category: "Watches"
      },
      {
        title: "Smartwatch Series X",
        img: "https://i.pinimg.com/564x/9d/8a/fd/9d8afd8231d37c76a9b75191105276c7.jpg",
        description: "A smartwatch with advanced features like fitness tracking and notifications.",
        category: "Watches"
      },
      {
        title: "Luxury Gold Watch",
        img: "https://i.pinimg.com/736x/2e/02/11/2e0211a3466fbe8e27191e32f8f4e8ac.jpg",
        description: "An exquisite gold-plated watch for a lavish style statement.",
        category: "Watches"
      },
      {
        title: "Minimalist Black Watch",
        img: "https://i.pinimg.com/564x/ba/0b/14/ba0b1456ac8fa197ba069335f8d8b347.jpg",
        description: "A simple yet modern black watch with a minimalistic design.",
        category: "Watches"
      },
      {
        title: "Solar-powered Watch",
        img: "https://i.pinimg.com/736x/9d/1a/84/9d1a843c4df9aee02b33b1b431f6e63e.jpg",
        description: "An eco-friendly solar-powered watch that never needs a battery.",
        category: "Watches"
      },
      {
        title: "Chronograph Watch",
        img: "https://i.pinimg.com/564x/df/65/b0/df65b0be41a87305497a0e2913d723ff.jpg",
        description: "A multifunctional chronograph watch with a stopwatch feature.",
        category: "Watches"
      },

      // Ladies Watches
      {
        title: "Ladies Gold Watch",
        img: "path-to-ladies-gold-watch-image.jpg",
        description: "A chic gold watch designed for women with style.",
        category: "Ladies Watches"
      },
      {
        title: "Ladies Diamond Watch",
        img: "path-to-ladies-diamond-watch-image.jpg",
        description: "A luxurious ladies' watch with embedded diamonds.",
        category: "Ladies Watches"
      },
      {
        title: "Rose Gold Ladies Watch",
        img: "path-to-rose-gold-ladies-watch-image.jpg",
        description: "A trendy rose gold watch perfect for every occasion.",
        category: "Ladies Watches"
      },
      {
        title: "Elegant Bracelet Watch",
        img: "path-to-bracelet-watch-image.jpg",
        description: "A slim ladies' watch with a bracelet-style band.",
        category: "Ladies Watches"
      },
      {
        title: "Ladies Chronograph Watch",
        img: "path-to-ladies-chronograph-watch-image.jpg",
        description: "A fashionable chronograph watch for women.",
        category: "Ladies Watches"
      },
      {
        title: "Vintage Leather Strap Watch",
        img: "path-to-vintage-leather-strap-watch-image.jpg",
        description: "A vintage-style leather strap watch for women.",
        category: "Ladies Watches"
      },
      {
        title: "Minimalist White Watch",
        img: "path-to-minimalist-white-watch-image.jpg",
        description: "A minimalist white watch for ladies with a modern taste.",
        category: "Ladies Watches"
      },
      {
        title: "Pearl Bezel Ladies Watch",
        img: "path-to-pearl-bezel-ladies-watch-image.jpg",
        description: "An elegant watch with a pearl bezel for a luxurious touch.",
        category: "Ladies Watches"
      },

      // Jewelry
      {
        title: "Diamond Necklace",
        img: "path-to-diamond-necklace-image.jpg",
        description: "A stunning diamond necklace, perfect for evening wear.",
        category: "Jewelry"
      },
      {
        title: "Gold Bracelet",
        img: "path-to-gold-bracelet-image.jpg",
        description: "A beautiful gold bracelet with intricate detailing.",
        category: "Jewelry"
      },
      {
        title: "Pearl Earrings",
        img: "path-to-pearl-earrings-image.jpg",
        description: "Elegant pearl earrings for timeless sophistication.",
        category: "Jewelry"
      },
      {
        title: "Sapphire Pendant",
        img: "path-to-sapphire-pendant-image.jpg",
        description: "A gorgeous sapphire pendant, perfect for formal occasions.",
        category: "Jewelry"
      },
      {
        title: "Emerald Brooch",
        img: "path-to-emerald-brooch-image.jpg",
        description: "A vintage emerald brooch with intricate detailing.",
        category: "Jewelry"
      },
      {
        title: "Diamond Tennis Bracelet",
        img: "path-to-diamond-tennis-bracelet-image.jpg",
        description: "A dazzling diamond tennis bracelet for special moments.",
        category: "Jewelry"
      },
      {
        title: "Gold Hoop Earrings",
        img: "path-to-gold-hoop-earrings-image.jpg",
        description: "Simple and elegant gold hoop earrings.",
        category: "Jewelry"
      },
      {
        title: "Ruby Choker",
        img: "path-to-ruby-choker-image.jpg",
        description: "A bold ruby choker that makes a statement.",
        category: "Jewelry"
      }
    ];

    const filteredItems = items.filter(item => item.category === "Rings");
    console.log(filteredItems);
    setproduct(filteredItems)
    console.log(product);
    
  }, [])
  return (
    <>
      <section className='container mx-auto p-3'>
        <div className='flex justify-between items-center mt-5 mx-2'>
          <h1 className='text-3xl font-bold'>Rings</h1>
          <p className='btn'>Items</p>
        </div>
        <div>
          {product.length > 0 ? <div className='flex mt-16 flex-wrap'>{product.map((item,index) => (
            <ProductCard item={item}/>
          ))}</div> : <p>Loading</p>}
        </div>
      </section>
    </>
  )
}

export default Rings
