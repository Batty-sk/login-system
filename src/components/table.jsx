import { Table, Button } from 'react-bootstrap';
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Table = () => {
  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
            <td>
              <Button variant="primary" className="mr-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>jane@example.com</td>
            <td>User</td>
            <td>
              <Button variant="primary" className="mr-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
  );
};

export default Table;
