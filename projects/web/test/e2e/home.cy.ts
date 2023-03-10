describe('[Home]', () => {
  it('should enter in main page and click button to redirect', () => {
    cy.visit('/');
  });

  it('should visit', () => {
    cy.visit('/home');
  });
});

export {};
