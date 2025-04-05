import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CuminSeed from '../ProductSection/ProductImage/cumin-seeds.jpg';
import CorianderSeed from '../ProductSection/ProductImage/coriander-seeds.jpg';
import TurmericFingers from '../ProductSection/ProductImage/turmeric-fingers.jpg';
import BlackPepper from '../ProductSection/ProductImage/black-pepper.jpg';
import Cloves from '../ProductSection/ProductImage/cloves.jpg';
import Cardamom from '../ProductSection/ProductImage/cardamom.jpg';
import FennelSeed from '../ProductSection/ProductImage/fennel-seeds.jpg';
import StarAnise from '../ProductSection/ProductImage/star-anise.jpg';
import Nutmeg from '../ProductSection/ProductImage/nutmeg-mace.jpg';
import TurmericPower from '../ProductSection/ProductImage/turmeric-powder.jpg';
import RedChilli from '../ProductSection/ProductImage/red-chilli-powder.jpg';
import CorianderPowder from '../ProductSection/ProductImage/coriander-powder.jpg';
import CuminPowder from '../ProductSection/ProductImage/cumin-powder.jpg';
import GingerPowder from '../ProductSection/ProductImage/ginger-powder.jpg';
import BlackPepperPowder from '../ProductSection/ProductImage/black-pepper-powder.jpg';
import GaramMasala from '../ProductSection/ProductImage/garam-masala.jpg';
import Raisin from '../ProductSection/ProductImage/raisins.jpg';
import Saffron from '../ProductSection/ProductImage/saffron.jpg';
import VanillaBeans from '../ProductSection/ProductImage/vanilla-beans.jpg';
import Makhana from '../ProductSection/ProductImage/makhana.jpg';
import BananaPowder from '../ProductSection/ProductImage/banana-powder.jpg';
import Basmati from '../ProductSection/ProductImage/basmati-rice.jpg';
import NonBasmati from '../ProductSection/ProductImage/non-basmati-rice.jpg';
import GunturChilli from '../ProductSection/ProductImage/guntur-chilli.jpg';
import ByadgiChilli from '../ProductSection/ProductImage/byadgi-chilli.jpg';
import KashmiriChilli from '../ProductSection/ProductImage/kashmiri-chilli.jpg';
import TejaChilli from '../ProductSection/ProductImage/teja-chilli.jpg';

const products = {
    'chilli': [
        { id: 24, name: 'Guntur Chilli', description: 'Fiery, high-heat variety.', image: GunturChilli },
        { id: 25, name: 'Byadgi Chilli', description: 'Mildly spicy with a wrinkled texture.', image: ByadgiChilli },
        { id: 26, name: 'Kashmiri Chilli', description: 'Mild in heat but vibrant in colour.', image: KashmiriChilli },
        { id: 27, name: 'Teja Chilli', description: 'Extremely hot and pungent.', image: TejaChilli },
    ],
    'whole-spices': [
        { id: 1, name: 'Cumin Seeds', description: 'Aromatic seeds with a warm, earthy flavor.', image: CuminSeed },
        { id: 2, name: 'Coriander Seeds', description: 'Slightly citrusy and nutty in taste.', image: CorianderSeed },
        { id: 3, name: 'Turmeric Fingers', description: 'Bright yellow rhizomes known for their earthy flavor.', image: TurmericFingers },
        { id: 4, name: 'Black Pepper', description: 'Pungent, spicy flavour used to enhance dishes.', image: BlackPepper },
        { id: 5, name: 'Cloves', description: 'Highly aromatic and slightly sweet.', image: Cloves },
        { id: 6, name: 'Cardamom (Green/Black)', description: 'Sweet, floral flavour.', image: Cardamom },
        { id: 7, name: 'Fennel Seeds', description: 'Sweet and liquorice-like.', image: FennelSeed },
        { id: 8, name: 'Star Anise', description: 'Strong liquorice flavour.', image: StarAnise },
        { id: 9, name: 'Nutmeg & Mace', description: 'Warm and sweet.', image: Nutmeg },
    ],
    'ground-spices': [
        { id: 10, name: 'Turmeric Powder', description: 'Earthy, slightly bitter taste.', image: TurmericPower },
        { id: 11, name: 'Red Chilli Powder', description: 'Adds heat and spice to dishes.', image: RedChilli },
        { id: 12, name: 'Coriander Powder', description: 'Citrusy and nutty flavour.', image: CorianderPowder },
        { id: 13, name: 'Cumin Powder', description: 'Warm, earthy depth to dishes.', image: CuminPowder },
        { id: 14, name: 'Ginger Powder', description: 'Spicy, slightly sweet flavour.', image: GingerPowder },
        { id: 15, name: 'Black Pepper Powder', description: 'Ground version of black pepper.', image: BlackPepperPowder },
        { id: 16, name: 'Garam Masala', description: 'Blend of spices that add warmth.', image: GaramMasala },
    ],
    'dried-fruits': [
        { id: 17, name: 'Raisins', description: 'Naturally sweet dried grapes.', image: Raisin },
        { id: 18, name: 'Saffron', description: 'Floral, honey-like aroma.', image: Saffron },
        { id: 19, name: 'Vanilla Beans', description: 'Fragrant and flavorful.', image: VanillaBeans },
        { id: 20, name: 'Makhana (Fox Nuts)', description: 'Nutritious snack.', image: Makhana },
        { id: 21, name: 'Banana Powder', description: 'Natural sweetener.', image: BananaPowder },
    ],
    'rice': [
        { id: 22, name: 'Basmati Rice', description: 'Fragrant aroma and fluffy texture.', image: Basmati },
        { id: 23, name: 'Non-Basmati Rice', description: 'Floral aroma and slightly sticky texture.', image: NonBasmati },
    ],
    
};

function ProductCategoriesSection() {
    const [activeCategory, setActiveCategory] = useState('chilli');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const handleViewMore = (product) => {
        // Navigate to the product details page using the slugified product name
        const slugifiedName = slugify(product.name);
        navigate(`/products/${slugifiedName}`); // Corrected this line
    };

    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .trim(); // Trim - from start and end
    };

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
                    <div className="w-24 h-1 bg-[#70BF01] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">Explore our premium range of authentic Indian spices and products, each carefully selected and processed to maintain their natural flavor and aroma.</p>
                </div>
                <div className="mb-10">
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button
                            className={`category-btn px-6 py-3 rounded-full font-medium transition ${activeCategory === 'chilli' ? 'bg-[#70BF01] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => handleCategoryClick('chilli')}
                        >
                            Chilli
                        </button>
                        <button
                            className={`category-btn px-6 py-3 rounded-full font-medium transition ${activeCategory === 'ground-spices' ? 'bg-[#70BF01] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => handleCategoryClick('ground-spices')}
                        >
                            Ground Spices
                        </button>
                        <button
                            className={`category-btn px-6 py-3 rounded-full font-medium transition ${activeCategory === 'dried-fruits' ? 'bg-[#70BF01] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => handleCategoryClick('dried-fruits')}
                        >
                            Dried Fruits & Specialty Items
                        </button>
                        <button
                            className={`category-btn px-6 py-3 rounded-full font-medium transition ${activeCategory === 'rice' ? 'bg-[#70BF01] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => handleCategoryClick('rice')}
                        >
                            Rice
                        </button>
                        <button
                            className={`category-btn px-6 py-3 rounded-full font-medium transition ${activeCategory === 'whole-spices' ? 'bg-[#70BF01] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => handleCategoryClick('whole-spices')}
                        >
                            Whole Spices
                        </button>
                    </div>

                    <div className={`category-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
                        {products[activeCategory] && products[activeCategory].length > 0 ? (
                            products[activeCategory].map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden product-card transition-all duration-300">
                                    <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                                        {/* <p className="text-gray-600">{product.description}</p> */}
                                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                            {/* <span className="text-sm text-gray-500">Available in multiple sizes</span> */}
                                            <button className="text-[#70BF01] hover:text-yellow-700" onClick={() => handleViewMore(product)}>
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-600">No products available in this category.</p>
                        )}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="/contact" className="inline-flex items-center gap-2 bg-[#70BF01] text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition duration-300 font-medium">
                        Request Product Catalog
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProductCategoriesSection;