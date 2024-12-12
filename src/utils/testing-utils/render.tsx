import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';

export function render(ui: React.ReactNode, options = {}) {
  function AllProviders({ children }: { children: React.ReactNode }) {
    return <MantineProvider>{children}</MantineProvider>;
  }

  return testingLibraryRender(ui, {
    wrapper: AllProviders,
    ...options,
  });
}
