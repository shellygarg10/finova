import React from "react";
import Dashboard from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

const layout = () => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} />}>
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default layout;
