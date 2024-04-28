module.exports = (plop) => {
  plop.setGenerator("generator", {
    description: "Add a function to an existing package",
    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "What is the name of your package you want to add the function to?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your function you want to add to the package?",
      },
       {
        type: "input",
        name: "returnType",
        message: "Please provide the return type of the function.",
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a short description of your function.",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "../../packages/{{packageName}}/src/",
        templateFiles: "./templates/**",
      },
    ],
  });
};
