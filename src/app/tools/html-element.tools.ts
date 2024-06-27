export function getIdFromAttribute(element: HTMLElement): string {
  return element?.getAttribute('id') ?? '';
}
