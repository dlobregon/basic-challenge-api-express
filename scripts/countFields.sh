echo 'counting 3 fields' 
curl -X POST http://localhost:3000/countFields \
 -H "Content-Type: application/json" \
 -d '{"uno":1, "dos":2, "tres":3}'

echo '\n'
echo 'counting 4 fields'
curl -X POST http://localhost:3000/countFields \
 -H "Content-Type: application/json" \
 -d '{"uno":1, "dos":2, "tres":3, "cuatro": 4}'

echo '\n'
