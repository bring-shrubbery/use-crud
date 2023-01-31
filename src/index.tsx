import * as React from 'react';

interface UseCrudOptions {
  create: () => void;
  read: () => void;
  update: () => void;
  delete: () => void;
}

export const useCrud = (options?: UseCrudOptions) => {
  const [state, setState] = React.useState(0);

  return 'hello';
};
