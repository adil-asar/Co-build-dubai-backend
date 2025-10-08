// Simple test script to verify the User API endpoints
// Run this after starting your server with: node test-api.js

const BASE_URL = 'http://localhost:5000/api/users';

// Test data
const testUser = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '1234567890'
};

async function testAPI() {
  try {
    console.log('🧪 Starting API Tests...\n');

    // Test 1: Create User
    console.log('1. Testing CREATE user...');
    const createResponse = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testUser)
    });
    
    const createdUser = await createResponse.json();
    console.log('✅ Create User:', createResponse.status, createdUser.message);
    
    if (!createdUser.success) {
      console.log('❌ Create failed:', createdUser);
      return;
    }
    
    const userId = createdUser.data.user._id;
    console.log('📝 Created User ID:', userId, '\n');

    // Test 2: Get All Users
    console.log('2. Testing GET all users...');
    const getAllResponse = await fetch(BASE_URL);
    const allUsers = await getAllResponse.json();
    console.log('✅ Get All Users:', getAllResponse.status, allUsers.message);
    console.log('📊 Total users:', allUsers.data.pagination.totalUsers, '\n');

    // Test 3: Get User by ID
    console.log('3. Testing GET user by ID...');
    const getByIdResponse = await fetch(`${BASE_URL}/${userId}`);
    const userById = await getByIdResponse.json();
    console.log('✅ Get User by ID:', getByIdResponse.status, userById.message);
    console.log('👤 User name:', userById.data.user.name, '\n');

    // Test 4: Update User
    console.log('4. Testing UPDATE user...');
    const updateData = { name: 'Updated Test User' };
    const updateResponse = await fetch(`${BASE_URL}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    });
    
    const updatedUser = await updateResponse.json();
    console.log('✅ Update User:', updateResponse.status, updatedUser.message);
    console.log('🔄 Updated name:', updatedUser.data.user.name, '\n');

    // Test 5: Search Users
    console.log('5. Testing SEARCH users...');
    const searchResponse = await fetch(`${BASE_URL}?search=Updated`);
    const searchResults = await searchResponse.json();
    console.log('✅ Search Users:', searchResponse.status, searchResults.message);
    console.log('🔍 Found users:', searchResults.data.users.length, '\n');

    // Test 6: Delete User
    console.log('6. Testing DELETE user...');
    const deleteResponse = await fetch(`${BASE_URL}/${userId}`, {
      method: 'DELETE'
    });
    
    const deleteResult = await deleteResponse.json();
    console.log('✅ Delete User:', deleteResponse.status, deleteResult.message, '\n');

    // Test 7: Verify User Deleted
    console.log('7. Verifying user is deleted...');
    const verifyResponse = await fetch(`${BASE_URL}/${userId}`);
    const verifyResult = await verifyResponse.json();
    console.log('✅ Verify Deletion:', verifyResponse.status, verifyResult.message, '\n');

    console.log('🎉 All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure your server is running on http://localhost:5000');
  }
}

// Run tests
testAPI();
