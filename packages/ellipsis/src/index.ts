export function ellipsis(width?: number) {
  return `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `
}