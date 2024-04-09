import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import{MatCardModule} from "@angular/material/card";
import{MatToolbarModule} from "@angular/material/toolbar";
import{MatIconModule} from "@angular/material/icon";
import{MatDialogModule} from "@angular/material/dialog";
import{MatSnackBarModule} from "@angular/material/snack-bar";
import{MatTableModule} from "@angular/material/table";
import{MatCheckboxModule} from "@angular/material/checkbox";
import{MatFormFieldModule} from "@angular/material/form-field";
import{MatInputModule} from "@angular/material/input";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from "@angular/material/tabs"

@NgModule({
    declarations:[],
    imports: [
        CommonModule
    ],
    exports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatTableModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTabsModule
    ]
})
export class MaterialModule{}