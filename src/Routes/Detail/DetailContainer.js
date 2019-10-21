import React from "react";
import DetailPresnter from "./DetailPresnter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresnter result={result} error={error} loading={loading} />;
  }
}
