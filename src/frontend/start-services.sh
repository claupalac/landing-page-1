#!/bin/sh

# Start the React development server
npm start &

# Wait for React server to start
sleep 5

# Start the Express server
npm run server &

# Wait for both processes
wait 