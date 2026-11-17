import ProductsContainer from "./ProductsContainer";

const Product = () => {
    let productCategory = [
        'Dairy, Bread & Eggs', 
        'Electronics',
        'Rolling paper & tobacco', 
        'Snacks & Munchies', 'Hookah', 
        'Mouth fresheners', 
        'Cold Drinks & Juices', 
    ];

    return (
        <div>
            {
                productCategory.map((item)=> {
                    return <ProductsContainer item={item}/>
                })
            }
        </div>
    )
}

export default Product
