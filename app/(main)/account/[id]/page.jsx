import React from "react";
import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import { AccountChart } from "../_components/account-chart";
import { TransactionTable } from "../_components/transaction-table";

const AccountsPage = async ({ params }) => {
  const routeParams = await params;
  const id = routeParams.id;
  const accountData = await getAccountWithTransactions(id);
  if (!accountData) {
    notFound();
  }
  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight capitalize">
            {account.name}
          </h1>
          <p className="text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>

        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <AccountChart transactions={transactions} />

      {/* Transactions Table */}
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default AccountsPage;
