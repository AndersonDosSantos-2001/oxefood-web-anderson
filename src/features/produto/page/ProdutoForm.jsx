import { useState } from "react";
import { toast } from 'react-toastify';
import BackButton from "../../../shared/components/BackButton";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import SaveButton from "../../../shared/components/SaveButton";
import { cadastrar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_PRODUTO } from "../../produto/service/produtoService";

export default function ProdutoForm() {

    const [produto, setProduto] = useState({
        codigo: "",
        titulo: "",
        descricao: "",
        valorUnitario: "",
        tempoEntregaMinimo: "",
        tempoEntregaMaximo: ""
    });

    async function salvar() {
        
        try {
            await cadastrar(MAPPING_CONTROLLER_PRODUTO, produto);
            toast.success("Produto cadastrado com sucesso!");
        } catch (erro) {
            toast.error("Erro ao cadastrar produto.");
        }
    }

    return (

        <div>
            <Menu />

            <Breadcrumbs items={[
                { label: "Produto" },
                { label: "Cadastrar" }
            ]} />

                <div style={{ marginTop: '40px', marginLeft: '10%', marginRight: '10%' }}>

                <div className="overflow-x-auto shadow-sm">

                    <div className="flex items-center justify-between mb-6" style={{marginTop: '20px', marginLeft: '10px', marginRight: '10px'}}>

                        <h1 className="text-3xl font-bold text-gray-800">
                            Novo produto
                        </h1>

                    </div>

                    <div className="divider divider-info" />

                    <div className="overflow-x-auto" style={{padding: '30px'}}>
                        <form>
                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="titulo">Título</label>
                                        <input
                                            type="text"
                                            id="titulo"
                                            className="input input-bordered w-full"
                                            value={produto.titulo}
                                            onChange={(e) => 
                                                setProduto({ ...produto, titulo: e.target.value }) 
                                            }
                                        />
                                    </fieldset>

                                </div>
                                
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="descricao">Descricao</label>
                                        <input
                                            type="text"
                                            id="descricao"
                                            className="input input-bordered w-full"
                                            value={produto.descricao}
                                            onChange={(e) => 
                                                setProduto({ ...produto, descricao: e.target.value }) 
                                            }
                                        />
                                    </fieldset>
                                    
                                </div>

                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="codigo">Codigo</label>
                                        <input
                                            type="text"
                                            id="codigo"
                                            className="input input-bordered w-full"
                                            value={produto.codigo}
                                            onChange={(e) => 
                                                setProduto({ ...produto, codigo: e.target.value }) 
                                            }
                                        />
                                    </fieldset>
                                    
                                </div>

                            <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="valorUnitario">Valor Unitario</label>
                                        <input
                                            type="text"
                                            id="valorUnitario"
                                            className="input input-bordered w-full"
                                            value={produto.valorUnitario}
                                            onChange={(e) => 
                                                setProduto({ ...produto, valorUnitario: e.target.value }) 
                                            }
                                        />
                                    </fieldset>
                                    
                                </div>
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend" htmlFor="tempoEntregaMinimo">Tempo Entrega Minimo</legend>
                                        <input 
                                            type="text"  
                                            id="tempoEntregaMinimo" 
                                            className="input input-bordered w-full"
                                            value={produto.tempoEntregaMinimo} 
                                            onChange={(e) => 
                                                setProduto({ ...produto, tempoEntregaMinimo: e.target.value }) 
                                            }
                                        />
                                    </fieldset>

                                </div>

                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend" htmlFor="tempoEntregaMaximo">Tempo Entrega Maximo</legend>
                                        <input 
                                            type="text"  
                                            id="tempoEntregaMaximo" 
                                            className="input input-bordered w-full"
                                            value={produto.tempoEntregaMaximo} 
                                            onChange={(e) => 
                                                setProduto({ ...produto, tempoEntregaMaximo: e.target.value }) 
                                            }
                                        />
                                    </fieldset>

                                </div>
                            </div>

                                <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <div style={{marginTop: '50px', textAlign: 'left'}}>
                                        <BackButton destino="/produto" />
                                    </div>
                                    
                                </div>
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <div style={{marginTop: '50px', textAlign: 'right'}}>
                                        <SaveButton save={() => salvar()} />
                                    </div>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    );
}
