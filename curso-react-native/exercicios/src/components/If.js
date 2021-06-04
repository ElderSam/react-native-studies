export default props => { // Conditional Rendering #02
    if(props.teste) {
        return props.children
    } else {
        return false
    }
}