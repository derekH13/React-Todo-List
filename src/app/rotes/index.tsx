import { BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom"
import { Dashboard } from "../pages";



export const Routes = () => {

    return (
        <BrowserRouter>
         <Switch>

            {/* quando o navegador for pra rota '/' = Ola */}
            <Route path="/pagina-inicial" element={<Dashboard />} /> 



          {/* se a url não se encaixar com nenhuma a cima */}
           <Route path="*" element={<Navigate to="pagina-inicial" />}/>

         </Switch>
        </BrowserRouter>
    );
}