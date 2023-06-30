
import './TextField.css'


const TextField = (props) => {
   
   const modifiedPlaceHolder = `${props.placeholder}`

   const onTyping = (event) => {
        props.beChanged(event.target.value)
   }

    return(
        <div className='textField'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.required} placeholder={modifiedPlaceHolder}/>
        </div>
    )
}

export default TextField;