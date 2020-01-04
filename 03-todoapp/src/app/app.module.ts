import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosListComponent } from './components/todo/todos-list/todos-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { todoReducer } from './store/reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
