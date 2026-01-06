"use client";
import { TxStatus } from "@/types/types";
import React, { useMemo, useState } from "react";
import { Badge } from "../ui/badge";
import { MOCK_TRANSACTIONS } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { formatDate, formatNaira } from "@/lib/utils";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../ui/table";

const FILTERS: Array<{ label: string; value: "all" | TxStatus }> = [
  { label: "All", value: "all" },
  { label: "Success", value: "success" },
  { label: "Failed", value: "failed" },
  { label: "Pending", value: "pending" },
];

function StatusBadge({ status }: { status: TxStatus }) {
  const className =
    status === "success"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200 capitalize"
      : status === "failed"
      ? "bg-red-50 text-red-700 border-red-200 capitalize"
      : "bg-amber-50 text-amber-700 border-amber-200 capitalize";

  return (
    <Badge variant="outline" className={`gap-2 ${className}`}>
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${
          status === "success"
            ? "bg-emerald-500"
            : status === "failed"
            ? "bg-red-500"
            : "bg-amber-500"
        }`}
      />
      {status}
    </Badge>
  );
}

export default function TransactionsPage() {
  const [filter, setFilter] = useState<"all" | TxStatus>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return MOCK_TRANSACTIONS;
    return MOCK_TRANSACTIONS.filter((t) => t.status === filter);
  }, [filter]);
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="items-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Transactions
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Filter:
            </span>
            <Select value={filter} onValueChange={(v) => setFilter(v as any)}>
              <SelectTrigger className="w-45">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {FILTERS.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </header>

        <div className="overflow-hidden rounded-xl border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead className="text-right">Amount (₦)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.id}</TableCell>
                  <TableCell className="text-right">
                    {formatNaira(t.amount)}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={t.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(t.date)}
                  </TableCell>
                </TableRow>
              ))}

              {filtered.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No transactions found for this filter.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="gap-3 py-2">
          <p className="mt-1 text-sm text-muted-foreground">
            Showing {""}
            <span className="font-medium text-foreground">
              {filtered.length} {""}
            </span>
            of{" "}
            <span className="font-medium text-foreground">
              {MOCK_TRANSACTIONS.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
