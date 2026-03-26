function Admin() {
  return (
    <div>
      <h2>Admin Panel</h2>

      <div className="grid">
        <div className="card small">
          <h3>Users</h3>
          <p>Manage residents</p>
        </div>

        <div className="card small">
          <h3>Apartments</h3>
          <p>Manage apartment units</p>
        </div>

        <div className="card small">
          <h3>Complaints</h3>
          <p>Track all issues</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;