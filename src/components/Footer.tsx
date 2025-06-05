import React from 'react';

const Footer = () => (
  <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
    <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
      <p className="text-sm sm:text-base text-muted-foreground transition-all duration-300 hover:text-foreground">
        Quietly shipping what matters.
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground font-mono transition-all duration-300 hover:text-terminal-green">
        // built by someone who smiles more than he tweets
      </p>
    </div>
  </footer>
);

export default Footer;
