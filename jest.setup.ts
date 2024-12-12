import '@testing-library/jest-dom';

const { getComputedStyle } = window;

window.getComputedStyle = (elt: Element): CSSStyleDeclaration => getComputedStyle(elt);

window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class ResizeObserver {
  observe(): void {}

  unobserve(): void {}

  disconnect(): void {}
}

window.ResizeObserver = ResizeObserver as unknown as typeof ResizeObserver;
