import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("should render initial value provided in props", () => {
    cy.mount(<Counter initialValue="test" />);
    cy.get('[data-cy-root]').should('contain.text', 'test');
  });

  it('should click event on "decrement" button decrements the displayed value', () => {
    cy.mount(<Counter initialValue={0} />);
    cy.get('button').contains('+').click();
    cy.get('[data-cy-root]').should('contain.text', 'Value: 1');
  });

  it('should click event on "decrement" button decrements the displayed value', () => {
    cy.mount(<Counter initialValue={0} />);
    cy.get('button').contains('-').click();
    cy.get('[data-cy-root]').should('contain.text', 'Value: -1');
  });
});


