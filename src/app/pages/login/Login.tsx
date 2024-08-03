import { log } from "console";
import { useState } from "react";


export const Login = () => {

    // usando o useState
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const LoginEntar = () => {
            console.log(email);
            console.log(senha);
    }

    return(
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                </label>

                <button type="button" onClick={LoginEntar}>Entar</button>
            </form>
        </div>
    );
}

