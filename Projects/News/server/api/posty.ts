export default defineEventHandler(async (event) => {
  const { age } = getQuery(event);
  const body = await readBody(event);

  console.log("Age:", age);
  console.log("Body:", body);

  return {
    message: `This is a POST request handler. Age: ${age}, Name: ${body.name}`,
  };
});
