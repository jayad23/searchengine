const Cards = ({name, image})=>{
    return (
        <div>
            <img src={image} alt="" />
            <h4>Hero: {name}</h4>
        </div>
    )
}

export default Cards