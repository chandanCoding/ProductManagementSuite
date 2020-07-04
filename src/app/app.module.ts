import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    NavigationComponent,
    DialogBoxComponent,
  ],
  entryComponents: [DialogBoxComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
