# Minerva Technical Assessment
Created By Cassandra Smith

I decided to create this clone using React-Redux, Django, and a REST API. I am most familiar with coding sites in React and Django which is why I decided to use them for this clone. First, I started creating the backend and API in Python. I created some endpoints and began editing the SQLite database that comes with Django for it to hold the this-that data. Then I began on the frontend and used React-Redux actions and reducers in order to fetch data from the backend, set it in the state, and then send that state as props to the proper component. Lastly, I added the twitter share button using the react-twitter-embed package that I found online and added some styling. 

##Running the Backend
To run the Django backend, there is a default.nix file that contains the necessary packages. Run the two commands 
below and it will install in the packages and set up the environment. The backend will run on http://localhost:8000/.
```
nix-shell
python3 minerva-test-backend/manage.py runserver 8000
```


##Running the Frontend
To run the React frontend, run the lines below. They will install npm and the necessary packages. `npm start` 
will run the frontend on http://localhost:3000/.
```
nix-shell -p nodejs-8_x
cd minerva-test-frontend
npm install
npm start
```

With both front and back-ends running simultaneously, they should be able to communicate and run the clone properly.

