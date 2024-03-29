import Item from './Item'

function ItemList(props) {

     return (
       <>
            <h2 className="text-2xl text-center	mt-10  mx-auto mb-5">Productos</h2>
            <div className=" mx-auto w-4/5 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8 m-8">
              {props.items.map( i => <Item key={i.id} item={i}></Item>)}
            </div>
        </>
        )
}

export default ItemList