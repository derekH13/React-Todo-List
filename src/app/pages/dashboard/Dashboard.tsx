import { Link } from 'react-router-dom'


//aqui eu crio um componente
const Button = () => {
    return <button>Meu button</button>
}

//aqui é uma pagina
export const Dashboard = () => {
    return(
        <div>
            <Link to="/entar">Login</Link>
            <p>pagina Dash</p>  
            <Button />
        </div>
        
    )

}