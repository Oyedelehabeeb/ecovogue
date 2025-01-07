"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Select from "./Select";

function SortBy({ options }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortBy = searchParams.get("sortBy") || "price-asc";

  function handleChange(e) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", e.target.value);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <Select options={options} value={sortBy} onChange={handleChange} />
    </div>
  );
}

export default SortBy;
