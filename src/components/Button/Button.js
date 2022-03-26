function Button(props)
{
    return(
        <a href={props.redirect} target="_blank" className={props.style}>{props.content}</a>
    )
}
export default Button;