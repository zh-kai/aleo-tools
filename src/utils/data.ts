export function toUtf8Bytes(str: string) {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}
