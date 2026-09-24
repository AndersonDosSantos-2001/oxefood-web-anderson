import { useEffect, useState } from "react";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import CrudActions from "../../../shared/components/CrudActions";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import NewButton from "../../../shared/components/NewButton";
import { listar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_EMPRESA } from "../service/empresaService";

export default function EmpresaPage() {

   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregar();
   }, []);

   async function carregar() {
      const data = await listar(MAPPING_CONTROLLER_EMPRESA);
      setLista(data);
   }

   function editar(id) {}

   async function confirmarRemover(id) {
       if (confirm("Deseja realmente excluir este empresa?")) {
           console.log(id);
       }
   }

   return (
       <div>
           <Menu />
           <Breadcrumbs items={[
               { label: "Empresa" },
               { label: "Listar" }
           ]} />

           <div style={{ marginTop: '40px', marginLeft: '10%', marginRight: '10%' }}>

            <div className="overflow-x-auto shadow-sm">
                
                   <div className="flex items-center justify-between mb-6" style={{marginTop: '20px', marginLeft: '10px', marginRight: '10px'}}>
                       <h1 className="text-3xl font-bold text-gray-800">
                           Empresa
                       </h1>
                       <NewButton destino="/empresa-form" />
                   </div>
                   <div className="divider divider-info" />
                   <div className="overflow-x-auto" style={{marginTop: '30px'}}>
                       <table className="table table-zebra">
                           <thead>
                               <tr style={{textAlign: 'center'}}>
                                   <th>Nome</th>
                                   <th>Site</th>
                                   <th>fone</th>
                                   <th>Ações</th>
                               </tr>
                           </thead>
                           <tbody>
                               {lista.map(empresa => (
                                   <tr key={empresa.id}>
                                       <td style={{textAlign: 'center'}}>{empresa.nomeFantasia}</td>
                                       <td style={{textAlign: 'center'}}>{empresa.site}</td>
                                       <td style={{textAlign: 'center'}}>{empresa.fone}</td>
                                       <td style={{textAlign: 'center'}}>
                                           <CrudActions
                                               onEdit={() => editar(empresa.id)}
                                               onDelete={() => confirmarRemover(empresa.id)}
                                           />
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
           <Footer />
       </div>
   );
}
