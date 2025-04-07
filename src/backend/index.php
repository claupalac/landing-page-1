<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Get the request path
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Simple router
switch ($path) {
    case '/api/features':
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            getFeatures();
        } else {
            sendResponse(['error' => 'Method not allowed'], 405);
        }
        break;
        
    case '/api/contact':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            handleContactForm();
        } else {
            sendResponse(['error' => 'Method not allowed'], 405);
        }
        break;
        
    default:
        sendResponse(['error' => 'Not found'], 404);
        break;
}

// API endpoints
function getFeatures() {
    $features = [
        [
            'id' => 1,
            'title' => 'Feature 1',
            'description' => 'Discover the power of innovation'
        ],
        [
            'id' => 2,
            'title' => 'Feature 2',
            'description' => 'Experience seamless integration'
        ],
        [
            'id' => 3,
            'title' => 'Feature 3',
            'description' => 'Unleash your creativity'
        ]
    ];
    
    sendResponse([
        'status' => 'success',
        'data' => [
            'features' => $features
        ]
    ]);
}

function handleContactForm() {
    // Get JSON data from request body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Validate required fields
    $required_fields = ['name', 'email', 'subject', 'message'];
    $missing_fields = [];
    
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            $missing_fields[] = $field;
        }
    }
    
    if (!empty($missing_fields)) {
        sendResponse([
            'status' => 'error',
            'message' => 'Missing required fields: ' . implode(', ', $missing_fields)
        ], 400);
        return;
    }
    
    // In a real application, you would:
    // 1. Validate email format
    // 2. Sanitize input
    // 3. Store in database
    // 4. Send email notification
    
    // For this example, we'll just log the data
    error_log('Contact form submission: ' . json_encode($data));
    
    sendResponse([
        'status' => 'success',
        'message' => 'Your message has been received. We will get back to you soon.'
    ]);
}

// Helper function to send JSON response
function sendResponse($data, $status_code = 200) {
    http_response_code($status_code);
    echo json_encode($data);
    exit;
} 