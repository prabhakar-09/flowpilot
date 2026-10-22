
export function runWorkflow(workflow) {

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

        } else if (
            step.type === "action" &&
            step.actionType === "log"
        ) {
            console.log(`[Workflow Log] ${step.config.message}`);
            currentStepId = step.next;

        } else if (step.type === "end") {
            console.log("Workflow completed successfully!");
            currentStepId = null;

        } else {
            throw new Error(`Unsupported step type: ${step.type}`);
        }
    }
}
