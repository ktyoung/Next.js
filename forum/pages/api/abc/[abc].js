export default function handler(request, response) {
  console.log(request.query); // { 'abc' : 'anyString' }
  return response.status(200).json("응답함");
}
