import cssClass from './Card.module.css';

const Card = (props) => {
    return (
        <section className={cssClass['card-holder']}>
            <div className={cssClass['card']}>{props.children}</div>
        </section>
    )
}

export default Card;