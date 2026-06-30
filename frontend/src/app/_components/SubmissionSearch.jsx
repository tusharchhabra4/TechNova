"use client";

import { useEffect, useState } from "react";

import { searchSubmissions } from "@/actions/submission";

import SubmissionCard from "./SubmissionCard";

import SubmissionSkeleton from "./SubmissionSkeleton";

export default function SubmissionSearch({
  header,
  submissions,
  responseFields,
  initialVisibleFields,
  showMoreText,
  modalTitle,
  closeButtonText,
  emptyStateMessage,
  searchPlaceholder,
  searchIcon,
}) {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState(submissions);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!search.trim()) {
        setResults(submissions);
        return;
      }

      setLoading(true);

      try {
        const response = await searchSubmissions(search);

        setResults(response.data || []);
      } catch (error) {
        console.error(error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search, submissions]);

  return (
    <>
      {/* Header */}

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>{header}</div>

        <div className="w-full md:w-96">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="
                w-full
                rounded-full
                border
                border-slate-300
                py-3
                pl-12
                pr-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
            />
          </div>
        </div>
      </div>

      {/* Loading */}

      {loading ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SubmissionSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.length > 0 ? (
            results.map((submission) => (
              <SubmissionCard
                key={submission.id}
                submission={submission}
                responseFields={responseFields}
                initialVisibleFields={initialVisibleFields}
                showMoreText={showMoreText}
                modalTitle={modalTitle}
                closeButtonText={closeButtonText}
              />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
              <h3 className="text-xl font-semibold text-slate-700">
                {emptyStateMessage}
              </h3>
            </div>
          )}
        </div>
      )}
    </>
  );
}
