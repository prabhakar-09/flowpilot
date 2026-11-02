
import { actionHandlers } from "./handlers.js";

export function runWorkflow(workflow, input={}) {

    
    const context = {
        input: input,
        variables: {},
        steps: {}
    };

    console.log("Initial Execution Context:", context);


    let currentStepId = workflow.startStepId;
    let executedCount = 0;

    while (currentStepId !== null) {

        executedCount++;

        if (executedCount > workflow.steps.length) {
            throw new Error("Possible workflow cycle detected");
        }

        const step = workflow.steps.find(
            item => item.id === currentStepId
        );

        if (!step) {
            throw new Error(`Step ${currentStepId} not found`);
        }

        console.log(`Executing: ${step.id} (${step.type})`);

        if (step.type === "start") {
            currentStepId = step.next;

        } else if (step.type === "action") {

            const handler = actionHandlers[step.actionType];

            if (typeof handler !== "function") {
                throw new Error(
                    `Unsupported action: ${step.actionType}`
                );
            }

            const result = handler(step.config);

            for (const message of result.logs) {
                console.log(`[Workflow Log] ${message}`);
            }

            currentStepId = step.next;

        } else if (step.type === "end") {
            console.log("Workflow completed successfully!");
            currentStepId = null;

        } else {
            throw new Error(`Unsupported step type: ${step.type}`);
        }
    }
    return context;
}
