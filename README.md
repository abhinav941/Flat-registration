This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

How to use it......

there are 5 major routes in the page : All Component for routes present in -> Component/Pages
    1:Dashboard -> for future purpose
    2:Flat Owner Registration -> for flat owner registration
        Component for this is : Home  
    3:Flat Master Registration -> for Apartment Master Registration
        Component for this is : About  
    4:Sign in : for Signing in Apartment master
        Component for this is : Signin  
    5:Register : for registration of the master.
        Component for this is : Register  

Flat Owner Registration :  
    It uses the dataset of flats. Which was provided by the Flat Master during registration.
    flats dataset consist of:
        1: no : Flat Number ->starting : 0
        2: flatDetails : Detail of flat -> no. of room , no .of kitchens etc 
        3: flatOwner : details of flat owner -> inititaly : []
        4: vacant : This will check the that flat is occupied or not. 

Flat Master Registration : 
    It uses the complete data of the apartment and can be set during the registration
    Initialy there is 0 floor and floor detials are:
        1: flats is the empty array
        2: starts : starting number of Flat on the Floor:0
        3: ends : ending number of Flat on the Floor:0
    

    If we save the Floor the number accordingly the apartment is created of that no. of floor and then we will proceed in the detailing the number of flats on each floor.


Creater Details :
    Name : Abhinav Rao
    Contact : +91-813-005-5276
    Email : abhinavrao941@gmail.com
