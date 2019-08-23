declare module 'string-to-stream' {
  const stringToStream: (data: string) => NodeJS.ReadableStream;
  export = stringToStream;
}
