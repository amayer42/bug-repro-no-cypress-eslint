# BugReproNoCypressEslint

This is a Nx Angular workspace created to reproduce an issue with the `@nx/angular:cypress-component-configuration` generator. Since this generator configures cypress component tests "inline" within a project, it should also configure linting appropriately to apply the `plugin:cypress/recommended` ruleset to cypress test files in the project.

In the case of this reproduction, I think that `apps/app/.eslintrc.json` should have been updated by the generator with something like the following or another equivalent.

```json
{
  "files": ["*.cy.ts"],
  "extends": ["plugin:cypress/recommended"]
}
```

If this is added, the `cy.wait` that I've added to `app/src/app/app.component.cy.ts` will be properly flagged as incorrect according to the recommended cypress ruleset.
