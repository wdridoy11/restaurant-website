/*
1. stripe install
2. create a checkout form with card element (card element contains: card number, expiration date, cvs,)
3. create account on sripe and get the publishable key pk
4. get card infomation
5. create a payment method
6. use test card to test payment
7. on the server side: install stripe:
8. create a payment intent api with payment methord types: ['card']
9. make sure you provide amount in cents (multiply price with 100)
* call payment intent api to get client secret and strore it in a state
10. use confirmcard payment api with client secret card info
11. display confirm card error 
12. display confirm card success
13. do thing after payment -->
14. 
15.
16


*/