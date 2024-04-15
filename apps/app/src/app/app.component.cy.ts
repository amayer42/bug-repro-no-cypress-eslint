import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    // This is valid by the default settings when running the `@nx/angular:cypress-component-configuration` generator.
    cy.wait(3000);

    cy.mount(AppComponent);
  });
});
