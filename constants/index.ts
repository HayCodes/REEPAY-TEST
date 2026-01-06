import { Transaction } from "@/types/types";

export const MOCK_TRANSACTIONS: Transaction[] = [
{ id: "TX-1001", amount: 12500, status: "success", date: "2026-01-05T10:12:00Z" },
{ id: "TX-1002", amount: 4999, status: "pending", date: "2026-01-05T12:40:00Z" },
{ id: "TX-1003", amount: 250000, status: "failed", date: "2026-01-04T09:05:00Z" },
{ id: "TX-1004", amount: 7300, status: "success", date: "2026-01-03T18:22:00Z" },
{ id: "TX-1005", amount: 18000, status: "pending", date: "2026-01-02T07:10:00Z" },
{ id: "TX-1006", amount: 99999, status: "success", date: "2026-01-01T14:01:00Z" },
{ id: "TX-1007", amount: 3200, status: "failed", date: "2025-12-30T16:45:00Z" },
{ id: "TX-1008", amount: 56000, status: "success", date: "2025-12-29T11:30:00Z" },
{ id: "TX-1009", amount: 1500, status: "pending", date: "2025-12-28T08:00:00Z" },
];