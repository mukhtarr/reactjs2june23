import React from "react";

export default function PropsDemo1({ name, address }) {
 
  return (
    <div>
      <h1>hi i am propsDemo compoennt</h1>
      Welcome {name} from {address}
    </div>
  );
}
