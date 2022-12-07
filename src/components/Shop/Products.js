import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
  {
  id:1,
  title:'Book',
  price:250,
  description:'A good book'
},
{
  id:2,
  title:'Pen',
  price:50,
  description:'A good pen'
},
{
  id:3,
  title:'Pencil',
  price:30,
  description:'A good pencil'
},
{
  id:4,
  title:'marker',
  price:220,
  description:'A good marker'
},
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((product)=>(
           <ProductItem
           key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
        ))}
      </ul>
    </section>
  );
};

export default Products;
