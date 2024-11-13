import React from 'react';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to the Nextjs Backend Application</h1>

      <h2>API Endpoints</h2>
      <br></br>
      <p>Use the following API endpoints with tools like Postman to interact with the database:</p>
      <br></br>

      <h3>User Endpoints</h3>
      <table style={{ borderCollapse: 'collapse', width: '80%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Method</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Endpoint</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>POST</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/create-user</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add a new user</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>DELETE</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/delete-user</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Delete a user by ID</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>GET</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/get-users</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retrieve all users</td>
          </tr>
        </tbody>
      </table>

      <h3>Blog Endpoints</h3>
      <table style={{ borderCollapse: 'collapse', width: '80%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Method</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Endpoint</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>POST</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/create-blog</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add a new blog post</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>PATCH</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/update-blog</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Update a blog post by ID</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>DELETE</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/delete-blog</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Delete a blog post by ID</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>GET</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/get-blogs</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retrieve all blog posts</td>
          </tr>
        </tbody>
      </table>

      <h3>Comment Endpoints</h3>
      <table style={{ borderCollapse: 'collapse', width: '80%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Method</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Endpoint</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>POST</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/add-comment</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add a comment to a blog post</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>POST</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/get-comment</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retrieve comments for a blog post</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>DELETE</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>/api/delete-comment</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Delete a comment by ID</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Test the API</h2>
      <p>To test the API endpoints, use a tool like <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a> or any HTTP client of your choice.</p>
      <br></br>

      <h1><a href="https://daytona.io" target="_blank" rel="noopener noreferrer">Simplify your development environment using Daytona</a></h1>

    </div>
  );
};

export default HomePage;
