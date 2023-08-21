import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaProdutosComponent } from "./categoria-produtos/categoria-produtos.component";
import { ListaProdutosComponent } from "../produtos/lista-produtos/lista-produtos.component";


const routes: Routes = [
    {
        path: '',
        component: CategoriaProdutosComponent
    },
    {
        path: 'id',
        component: ListaProdutosComponent
    },
    {
        path: 'categoria',
        component: ListaProdutosComponent
    },
    {
        path: 'status',
        component: ListaProdutosComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule { }