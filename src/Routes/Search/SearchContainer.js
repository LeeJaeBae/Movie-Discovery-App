import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchTerm: "",
    loading: true,
    error: null
  };
  render() {
    const { movieResult, tvResult, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
