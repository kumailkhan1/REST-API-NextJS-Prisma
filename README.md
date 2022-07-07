A REST API with Next.JS without front-end.

Following requirements are used to build this API:

1. The first step is to define the requirements. From those requirements, we’ll have a better idea of what we’ll need to build as part of our API.

2. People using the app first need to create a trip. They will give the trip a name. For example “weekend in the Alps”. And they will also indicate a start and end date. 

3. Once the trip is created, they can start adding expenses. An expense has a name, a date, an amount, and a description.

4. Both expenses and trips can be modified after they’ve been created and deleted.

5. We also need a way to list all trips and list all expenses on a particular trip. 

6. We’ll list trips by date.

7. We also need to allow users to list expenses in a trip by date or by amount.

That’s the scope of our project. This is what the user-facing application will allow.

- `GET /trips` get the list of trips
    
    no parameters
    
- `POST /trips` create a new trip
    - `user` *required* the number that identifies the user
    - `name` *required* the name of the trip
    - `start_date` (optional) the starting date of the trip
    - `end_date` (optional) the end date of the trip
- `GET /trips/:id` get the details of a trip
    - `id` *required* the number that identifies the trip
- `PUT /trips/:id` modify the details of a trip
    - `id` *required* the number that identifies the trip
    - `name` (optional) the name of the trip
    - `start_date` (optional) the starting date of the trip
    - `end_date` (optional) the end date of the trip
- `DELETE /trips/:id` delete a trip (and all its expenses)
    - `id` *required* the number that identifies the trip
- `POST /expenses` create a new expense
    - `trip` *required* the number that identifies the trip
    - `name` *required* the name of the expense
    - `date` *required* the date of the expense
    - `amount` *required* the amount of the expense
    - `currency` *required* the currency of the expense
- `GET /expenses/:id` get the details of an expense
    - `id` *required* the number that identifies the expense
- `PUT /expenses/:id` modify the details of an expense
    - `id` *required* the number that identifies the expense
    - `trip` (optional) the number that identifies the trip
    - `name` (optional) the name of the expense
    - `date` (optional) the date of the expense
    - `amount` (optional) the amount of the expense
    - `currency` (optional) the currency of the expense
- `DELETE /expenses/:id`  delete an expense
    - `id` *required* the number that identifies the expense