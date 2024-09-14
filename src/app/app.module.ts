import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { DurationPipe } from './Shared/duration.pipe';
import { AgePipe } from './Shared/age.pipe';
import { ReversePipe } from './Shared/reverse.pipe';
import { TitlePipe } from './Shared/title.pipe';
import { AutofocusDirective } from './Shared/CustomDirectives/autofocus.directive';
import { BasicDirective } from './Shared/CustomDirectives/basic.directive';

@NgModule({
  declarations: [AppComponent, PipesTestComponent, DurationPipe, AgePipe, ReversePipe, TitlePipe, AutofocusDirective, BasicDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
