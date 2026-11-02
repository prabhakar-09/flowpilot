
import { sampleWorkflow } from "./workflows/sample-workflow.js";
import { runWorkflow } from "./core/engine.js";

console.log("FlowPilot JavaScript module loaded!");

console.log("Loaded Workflow:", sampleWorkflow);


const finalContext = runWorkflow(sampleWorkflow, {
    requestId: 101,
    amount: 150000
});

console.log("Final Execution Context:", finalContext);


const app = document.querySelector("#app");

const statusMessage = document.createElement("p");

statusMessage.textContent = "FlowPilot JavaScript is running successfully!";

app.append(statusMessage);