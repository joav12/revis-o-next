import Formulario from "../components/formulario"

export default function contato(){
    
    const nome = "FIAP"
    
    console.log(`O server está ligado!! Olá ${nome}`)

    return(
        <>
        
        <h1>Contato</h1>
        <h3>Elementos desenvolvidos no NextJS</h3>
        <h5>Usuário: {nome}</h5>
        <Formulario></Formulario>
        
        </>
    )
}