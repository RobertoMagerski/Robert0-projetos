import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CategoriaProdutosComponent } from "./categoria-produtos/categoria-produtos.component";
import { CategoriaRoutingModule } from "./categoria-produtos.routing";
import { ListaProdutosComponent } from "../produtos/lista-produtos/lista-produtos.component";

@NgModule({

    declarations: [
        CategoriaProdutosComponent,
        
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        CategoriaRoutingModule
    ],
    exports: [
    ]

})
export class CategoriaProdutosModule { } 