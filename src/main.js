
import { sampleWorkflow } from "./workflows/sample-workflow.js";
import { runWorkflow } from "./core/engine.js";

console.log("FlowPilot JavaScript module loaded!");

console.log("Loaded Workflow:", sampleWorkflow);
runWorkflow(sampleWorkflow);

const app = document.querySelector("#app");

const statusMessage = document.createElement("p");

statusMessage.textContent = "FlowPilot JavaScript is running successfully!";

app.append(statusMessage);