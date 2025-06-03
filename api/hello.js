module.exports = async function (context, req) {
  context.log('Hello from Azure Function!');
  context.res = {
    status: 200,
    body: "Hello from your Azure Function!"
  };
};
