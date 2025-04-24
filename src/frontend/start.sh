#!/bin/bash

# Kill any existing processes on ports 3000 and 3001
kill -9 $(lsof -t -i:3000) 2>/dev/null
kill -9 $(lsof -t -i:3001) 2>/dev/null

# Start the React development server
npm start &

# Wait for React server to start
sleep 5

# Start the Express server
npm run server &

# Wait for both processes
wait 