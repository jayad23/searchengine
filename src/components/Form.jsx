
import '../styles/Form.css'

const Form = ({handlerSearch, handlerSubmit})=>{
    return (
        <form onSubmit={e => handlerSubmit(e)}>
            <input 
                type="text" 
                placeholder="Type in..." 
                onChange={({target}) => handlerSearch(target)}
                required={true}/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default Form