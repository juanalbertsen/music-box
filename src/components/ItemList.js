import { injectThemes } from 'daisyui/src/colors/functions'
import Item from './Item'

function ItemList(props) {

     return (
       <>
            <div className=" mx-auto grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-8">
              {props.items.map( i => <Item key={i.id} item={i}></Item>)}
            </div>
        </>
        )
}

export default ItemList