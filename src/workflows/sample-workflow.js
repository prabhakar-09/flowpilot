
export const sampleWorkflow = {
    id: "wf-001",
    name: "My First Workflow",
    version: 1,
    startStepId: "s1",

    steps: [
        {
            id: "s1",
            type: "start",
            next: "s2"
        },
        {
            id: "s2",
            type: "action",
            actionType: "log",
            config: {
                message: "Hello from FlowPilot!"
            },
            next: "s3"
        },
        {
            id: "s3",
            type: "end"
        }
    ]
};
