export default function Formulario(){

    return(
        <>
            <form className="card bg-dark text-light">
                <div className="card-header">
                    <h3 className="text-center">Cadastrar alimento</h3>
                </div>

                <div className="card-body">
                    <input type="text" name="nome" placeholder="Nome do produto" className="form-control"></input>

                    <label htmlFor="validade">Validade</label>
                    <input type="date" name="validade" className="form-control"/>

                    <textarea name="observacoes" id="" cols="30" rows="10"  placeholder="Observações" className="form-control"></textarea>
                </div>

                <div className="card-footer">
                    <input type="button" value="Gravar" className="btn btn-outline-info" />
                </div>    
            </form>
        </>
    )
}