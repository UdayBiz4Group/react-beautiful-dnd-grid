import React from "react";
// import hash from "object-hash";

export interface Props {
  items: any[];
}

function uuid(): string {

  const array: Uint8Array = new Uint8Array(6);
  const length = 6;
  const bytes = new Uint8Array(length);

  // Generate random values
  for (let i = 0; i < length; i++) {
    bytes[i] = Math.floor(Math.random() * 256);
  }

  // Copy to the original array
  for (let i = 0; i < length; i++) {
    array[i] = bytes[i];
  }

  return array.join('');
}

export const withReactToItemsChange = <P extends Props>(Component: React.ComponentType<P>): React.ComponentType<P> => (
  props: P
) => <Component key={uuid()} {...props} />;
