import css from "./ItemDetailInfo.module.css"

const ItemDetailInfo = ({ name, category, description, price }) => {
    return (
        <div className={css.container} >
            <h1> {name} </h1>
            <h2> ${price} </h2>
            <h2> {description} </h2>
            <p className={css.text} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum elementum ligula sed volutpat. Etiam eget odio et tellus imperdiet maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Pellentesque in accumsan diam, ut dapibus orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut dictum mi. Sed justo diam, egestas quis nibh vel, egestas aliquam est. Nunc ac velit eu libero luctus pretium gravida vel mi. Nam urna odio, malesuada et purus vitae, consequat rutrum elit. Quisque a sem at odio efficitur bibendum. Pellentesque id sagittis urna. Nam sagittis, turpis in interdum rhoncus, ligula dolor posuere turpis, at sollicitudin orci leo sed leo. Pellentesque at interdum tellus, vel aliquet diam. Duis rhoncus erat sed efficitur tincidunt. Cras eget consectetur lacus.
            </p>
        </div>
    )
}

export default ItemDetailInfo