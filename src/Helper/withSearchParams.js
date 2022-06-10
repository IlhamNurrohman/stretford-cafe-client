import React from "react";
import { useSearchParams } from "react-router-dom";

export default function withSearchParams(Component) {
  function WithSearchParams(props) {
    const [searchParams, setSearchparams] = useSearchParams();
    return (
      <Component
        searchParams={searchParams}
        setSearchparams={setSearchparams}
        {...props}
      />
    );
  }
  return WithSearchParams;
}