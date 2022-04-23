const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Rose Gold Goat Milk Soap',
      description:
        'This beautiful and creamy sweetly scented soap is just lovely- the white, rose, and yellow clays feel exquisite in the goat milk and kokum butter bar. The soft scent is a delicately sweet blend of coconut, candy apple, raspberry, red currant, tulip, freesia, heliotrope, rose, cashmere musk, amber, and vanilla.',
      image: 'RoseGoldGM.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 13
    },
    {
      name: 'Cocoa Butter Cashmere Soap',
      description:
        'This beautiful and creamy cashmere soap is a new customer favorite- the white and rose kaolin clay feels exquisite in this goat milk and cocoa butter bar, with luxurious additives like aloe extract and silk. The cozy scent is a delicately sweet blend of light spices, cedarwood, vanilla tonka, coconut, jasmine, olive wood, sandalwood, amber, musk, and cocoa butter.',
      image: 'CocoaButterCashmere.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 500
    },
    {
      name: 'Nectar',
      category: categories[1]._id,
      description:
        'This creamy milk soap has high-conditioning effects from nourishing coconut milk and is scented with a beautiful bouquet of tuberose, nectarine, cherry, honeysuckle, jasmine, rose, sandalwood, and musk- you wont believe how much it smells like the real thing! This dreamy floral soap is colored naturally with white and rose kaolin clays, yellow Brazilian clay, and annatto seed. Its made with aloe vera extract, tussah silk, and local honey for a voluminous and silky lather.',
      image: 'Nectar.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Lemongrass & Mint',
      category: categories[1]._id,
      description:
        'This lemongrass and spearmint soap smells so fresh and is naturally colored with skin-loving goodness! Creamy coconut milk and kokum butter give this refreshingly scented soap a silky, luxurious lather. This all-natural soap is colored with nutrient-rich spirulina, zesty annatto seed, and silky white kaolin clay.',
      image: 'LemongrassMint.jpg',
      price: 7.99,
      quantity: 50
    },
    {
      name: 'The Cowboy - Tobacco, Bay Leaf & Bourbon Soap',
      category: categories[1]._id,
      description:
        'This gritty cleansing bar is a fresh and sweet mix of bay leaf, fir needle, cedarwood, bergamot, tobacco, orange, bergamot, clove, musk, leather, oak cask, and patchouli. The complex scent goes into my hard and creamy soap base that my customers love, made with kokum butter and coconut milk, colored with white kaolin clay and Moroccan red clay for slip, and yarrow and pumice powder for plenty of fine grit.',
      image: 'Bourbon.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Lakewood Brewing Company Beer Soaps: Tangerine Queen',
      category: categories[2]._id,
      description:
        'This creamy and freshly scented mango butter soap is perfect for the beer lover in your life! Based on Lakewood Brewing Companys Tangerine Queen citrus wheat ale, this bubbly bar has a bright and effervescent blend of grapefruit, lemon, lime, cucumber, jasmine, pineapple, blackberry, and champagne. This soap has the added luxury of mango butter and coconut milk for a conditioning bar with a nice creamy lather.',
      image: 'LBWBSTangerine.jpg',
      price: 7.99,
      quantity: 30
    },
    {
      name: 'Lakewood Brewing Company Beer Soaps: Muy Importante!',
      category: categories[2]._id,
      description:
        'This creamy and freshly scented shea butter soap is perfect for the beer lover in your life! Based on Lakewood Brewing Companys Muy Importante margarita lager, this silky bar has an invigorating blend of lime, champagne, and sage. This soap has the added luxury of avocado oil and coconut milk for a conditioning bar with a nice creamy lather.',
      image: 'MuyImportante.jpg',
      price: 7.99,
      quantity: 30
    },
    {
      name: 'Bliss Beauty Bar',
      category: categories[3]._id,
      description:
        'This banana and oatmeal soap is packed with skin-loving goodies and is lightly fragranced for those with sensitive skin. Its made with nourishing colloidal oats, fresh banana puree, goat milk, aloe vera juice, white kaolin clay, turmeric, honey, and calendula extract, and has a sweet milk and honey scent to it. This beautiful bar is a low-cleansing, gentle, and conditioning soap, great for dry and mature skin.',
      image: 'Bliss.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Juicy IPA Soap',
      category: categories[4]._id,
      description: 'This creamy and freshly scented kokum butter soap is perfect for the beer lover in your life, and such a treat for the skin! The Juicy IPA is a gently exfoliating bar with an invigorating blend of fresh citrus, tart berry, herbaceous sage, and earthy fir needle. The fresh and earthy fragrance goes into my hard and creamy soap base that my customers love, made with kokum butter and coconut milk, and colored with nutrient-rich spirulina, exfoliating green clay, and nettle leaf powder, which has astringent and anti-inflammatory properties. Cane sugar, silk, and coconut milk give the bar a voluminous and silky lather.',
      image: 'IPA.jpg',
      price: 7.99,
      quantity: 15
    },
    {
      name: 'Old Fashioned Soap',
      category: categories[4]._id,
      description:
        'Zesty orange soap with a kick of bourbon and a hint of cherry! This kokum butter and coconut milk soap is the perfect combination of orange, bourbon, and cherry to make it feel like the real thing, but for your shower (and hey, we are not judging if you want to compare 😉)!',
      image: 'OLD.jpg',
      price: 7.99,
      quantity: 1000
    },
    {
      name: 'Grapefruit Bellini Soap',
      category: categories[4]._id,
      description:
        'This creamy and freshly scented kokum butter soap is perfect for the cocktail aficionado in your life! This bubbly bar has a juicy blend of fresh pineapple, sweet jasmine, grapefruit, peach nectar, mango, rhubarb, and sugared musk. Grapefruit Bellini is a luxurious bar with an extra pampering feel from exotic kokum butter, creamy coconut milk, and aloe vera juice for a conditioning bar with a beautiful silky lather.',
      image: 'Grapefruit.jpg',
      price: 7.99,
      quantity: 15
    },
    {
      name: 'Coconut & Clay Castile Soap',
      category: categories[4]._id,
      description:
        'This beautiful soap is perfect for sensitive and mature skin! These simple bars are made with 100% olive oil as the weight of oils for a gentle clean, while coconut milk boosts lather and adds luxury. The lovely patterns on these bars are a combination of bentonite and white kaolin clay, which are thought to help draw out toxins from the skin, and add a silky feel to soap lather. Lastly, this skin-loving powerhouse of a soap is made with extracts of calendula and aloe vera to help soothe irritation.',
      image: 'ClayCastile.jpg',
      price: 7.99,
      quantity: 6
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
