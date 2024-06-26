"use client";

import { useState } from "react"
import SearchBar from "./components/SearchBar";
import type { SearchResult } from "./utils/types";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  async function search() {
    if (query === "") {
      return;
    }

    const uri = `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${query}&limit=${10}`;

    const response = await fetch(uri);
    const results = await response.json();
    setResults(results);
  }

  return (
    <main>
      <SearchBar
        setQuery={setQuery}
        query={query}
        search={search}
      />
    </main>
  );
}
