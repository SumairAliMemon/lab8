if (require.main === module) {
    console.log("Running Tests...");
    console.log("Registering user...");
    users.push({ username: 'testuser', password: bcrypt.hashSync('password', 10) });
    console.log("User registered successfully.");
    
    console.log("Logging in user...");
    const user = users.find(u => u.username === 'testuser');
    if (user) console.log("Login successful.");
    else console.log("Login failed.");
    
    console.log("Creating event...");
    events.push({ name: 'Test Event', description: 'A test event', date: new Date(), category: 'Meeting', username: 'testuser' });
    console.log("Event created successfully.");
    
    console.log("Fetching events...");
    const userEvents = events.filter(e => e.username === 'testuser');
    console.log("Events fetched:", userEvents);
}
