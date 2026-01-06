export type TxStatus = "success" | "pending" | "failed";

export type Transaction = {
    id: string;
    amount: number;
    date: string; 
    status: TxStatus;
}