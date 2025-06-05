import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ showScrollTop, scrollToTop }) => (
  showScrollTop && (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 rounded-full w-10 h-10 sm:w-12 sm:h-12 z-50 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 animate-fade-in"
      size="icon"
    >
      <ArrowUp className="w-4 h-4" />
    </Button>
  )
);

export default ScrollToTop;
