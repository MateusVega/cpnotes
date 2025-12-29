function status(request, response) {
  response.status(200).json({ response_text: "Aham, Yes I did!" });
}

export default status;
