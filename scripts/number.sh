# echo 'geting number'
# curl -X GET  http://localhost:3000/number/1 -H "Content-Type: application/json"

echo 'posting number'
curl  -X POST http://localhost:3000/number/1 -H "Content-Type: application/json"
curl  -X POST http://localhost:3000/number/2 -H "Content-Type: application/json"
curl  -X POST http://localhost:3000/number/3 -H "Content-Type: application/json"

echo 'deleting a number'
curl -X DELETE http://localhost:3000/number/3 -H "Content-Type: application/json"

echo 'change a number' 
curl -X PUT http://localhost:3000/number/2/5 -H "Content-Type: application/json"