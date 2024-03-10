const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const membersRoute = require("./controllers/members");
const accountsRoute = require("./controllers/accounts");
const transactionsRoute = require("./controllers/transactions");
const loansRoute = require("./controllers/loans");
const loanRepaymentsRoute = require("./controllers/loanRepayment");
const loanTypesRoute = require("./controllers/loanTypes");
const savingsPlansRoute = require("./controllers/savingsPlansRoute");
const loanApplicationsRoute = require("./controllers/loanApplicationRoute");
const app = express();

app.use(cors())

app.use(bodyParser.json());

app.get("/", async(req, res)=>{
  let data = "Hello there";
  await res.send(data);
})

app.use("/", membersRoute);
app.use("/", accountsRoute);
app.use("/", transactionsRoute);
app.use("/", loansRoute)
app.use("/", loanRepaymentsRoute);
app.use("/", loanTypesRoute)
app.use("/", savingsPlansRoute)
app.use("/", loanApplicationsRoute)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on Port http://localhost:${PORT}`);
});
