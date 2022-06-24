import { StackContext, Table, NextjsSite } from "@serverless-stack/resources";

export function DigitalWalletDashboardStack({ stack, app }: StackContext) {
  
  // Create the table
  const DashboardDB = new Table(stack, "WalletDashboard", {
    fields: {
      PK: "string",
      SK: "string",
    },
    primaryIndex: { partitionKey: "PK", sortKey: "SK" },
  });

  const site = new NextjsSite(stack, "Digital Wallet Dashboard", {
    path:"frontend",
    environment: {
      REGION: app.region,
      TABLE_NAME: DashboardDB.tableName,
    },
  });

  site.attachPermissions([DashboardDB]);
  stack.addOutputs({
    URL: site.url
  });
}
