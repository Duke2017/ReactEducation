import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("Test that component renders initial value provided in props", () => {
    cy.mount(<Counter initialValue="test" />);
    cy.get('[data-cy-root]').should('contain.text', 'test');
  });

  it('Test that a click event on "decrement" button decrements the displayed value', () => {
    cy.mount(<Counter initialValue={0} />);
    cy.get('button').contains('+').click();
    cy.get('[data-cy-root]').should('contain.text', 'Value: 1');
  });

  it('Test that a click event on "decrement" button decrements the displayed value', () => {
    cy.mount(<Counter initialValue={0} />);
    cy.get('button').contains('-').click();
    cy.get('[data-cy-root]').should('contain.text', 'Value: -1');
  });
});


