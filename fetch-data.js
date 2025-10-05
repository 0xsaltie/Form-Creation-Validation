// 1. Initialize the async function
async function fetchUserData() {
  // 2. Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 3. Select the data container element
  const dataContainer = document.getElementById('api-data');

  try {
    // 4. Fetch data asynchronously
    const response = await fetch(apiUrl);
    const users = await response.json();

    // 5. Clear the "Loading user data..." message
    dataContainer.innerHTML = '';

    // 6. Create and append a user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
    // 7. Handle errors gracefully
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// 8. Run the function once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
